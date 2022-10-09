import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OccurreneTarget } from 'src/helpers/constants';
import { OccurrenceService } from 'src/occurrence/occurrence.service';
import { CreateErrandInput } from './dto/create-errand.input';
import { UpdateErrandInput } from './dto/update-errand.input';
import { Errand, ErrandDocument } from './entities/errand.entity';

@Injectable()
export class ErrandService {
  constructor(
    @InjectModel(Errand.name)
    private errandModel: Model<ErrandDocument>,
    private occurrenceService: OccurrenceService,
  ) {}

  async create(createErrandInput: CreateErrandInput) {
    const errand = new this.errandModel(createErrandInput);
    errand.status = errand.status ?? 'open';
    const created = await errand.save();
    this._addOccurrence(
      created._id.toString(),
      null,
      null,
      createErrandInput,
      true,
    );
    return errand;
  }

  async findAll(filters: any) {
    return await this.errandModel
      .find(filters)
      .sort({ createdAt: -1 })
      .populate('assignee')
      .populate('members')
      .populate('reporter')
      .exec();
  }

  async findOne(id: string) {
    return await this.errandModel
      .findById(id)
      .populate('assignee')
      .populate('members')
      .populate('reporter')
      .exec();
  }

  async update(id: string, updateErrandInput: UpdateErrandInput) {
    const previous = await this.findOne(id);
    const errand = await this.errandModel
      .findByIdAndUpdate(id, updateErrandInput)
      .setOptions({ new: true })
      .populate('assignee')
      .populate('members')
      .populate('reporter')
      .exec();
    if (!errand) {
      throw new NotFoundException();
    }
    this._addOccurrence(id, previous, errand, updateErrandInput, false);
    return errand;
  }

  async remove(id: string) {
    return await this.errandModel.findByIdAndRemove(id);
  }

  _addOccurrence(
    targetId: string,
    previous: Errand,
    updated: Errand,
    payload?: UpdateErrandInput | CreateErrandInput,
    newErrand = true,
  ) {
    const target = OccurreneTarget.ERRAND;
    if (newErrand) {
      this.occurrenceService.create({
        target,
        targetId,
        actor: payload.createdBy,
        description: 'created this errand',
      });
    } else {
      const keys = Object.keys(payload);

      keys.forEach((key) => {
        if (['id', 'startDate', 'endDate'].includes(key)) return;
        let description =
          `updated ${key}` + previous[key]
            ? ` from ${previous[key]} to ${payload[key]}`
            : ` to ${payload[key]}`;
        if (key === 'description') description = 'updated errand description';
        if (['assignee', 'reporter'].includes(key)) {
          description = `updated ${key} to ${updated[key]?.firstName} ${updated[key]?.lastName}`;
        }
        if (['members'].includes(key)) {
          description = '';
          if (previous[key].length > updated[key].length) {
            previous[key].forEach((member) => {
              if (
                updated[key].some(
                  (x) => x._id.toString() === member._id.toString(),
                )
              ) {
                description = `removed ${member?.firstName} ${member?.lastName} from `;
              }
            });
          } else {
            updated[key].forEach((member) => {
              if (
                !previous[key].some(
                  (x) => x._id.toString() === member._id.toString(),
                )
              ) {
                description += `added ${member?.firstName} ${member?.lastName} to `;
              }
            });
          }
          description += `members`;
        }
        this.occurrenceService.create({
          target,
          targetId,
          actor: payload.updatedBy,
          description,
        });
      });

      let description = '';
      if (keys.includes('startDate')) {
        description += `updated start date to ${payload.startDate}`;
      }

      if (keys.includes('startDate')) {
        description += description
          ? `and end date to ${payload.endDate}`
          : `updated end date to ${payload.endDate}`;
      }

      if (description) {
        this.occurrenceService.create({
          target,
          targetId,
          actor: payload.updatedBy,
          description,
        });
      }
    }
  }
}
