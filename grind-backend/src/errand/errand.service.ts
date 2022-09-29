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
    const created = await errand.save();
    this._addOccurrence(created._id.toString(), null);
    return errand;
  }

  async findAll() {
    return await this.errandModel.find().exec();
  }

  async findOne(id: string) {
    return await this.errandModel.findById(id);
  }

  async update(id: string, updateErrandInput: UpdateErrandInput) {
    const errand = await this.errandModel
      .findByIdAndUpdate(id, updateErrandInput)
      .setOptions({ new: true });
    if (!errand) {
      throw new NotFoundException();
    }
    this._addOccurrence(id, updateErrandInput);
    return errand;
  }

  async remove(id: string) {
    return await this.errandModel.findByIdAndRemove(id);
  }

  _addOccurrence(targetId: string, payload?: UpdateErrandInput) {
    if (!payload) {
      this.occurrenceService.create({
        target: OccurreneTarget.ERRAND,
        targetId,
        actor: '63354cf0f215dd17ec08e28f',
        description: 'created this errand',
      });
    } else {
      Object.keys(payload).forEach((key) => {
        if (key === 'id') return;
        this.occurrenceService.create({
          target: OccurreneTarget.ERRAND,
          targetId,
          actor: '63354cf0f215dd17ec08e28f',
          description: 'updated ' + key,
        });
      });
    }
  }
}
