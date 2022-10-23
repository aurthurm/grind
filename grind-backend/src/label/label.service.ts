import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLabelInput } from './dto/create-label.input';
import { UpdateLabelInput } from './dto/update-label.input';
import { Label, LabelDocument } from './entities/label.entity';

@Injectable()
export class LabelService {
  constructor(
    @InjectModel(Label.name)
    private labrlModel: Model<LabelDocument>,
  ) {}

  async create(createLabelInput: CreateLabelInput | any) {
    const labrl = new this.labrlModel(createLabelInput);
    return labrl.save();
  }

  async findAll(query = {}) {
    return await this.labrlModel.find(query).exec();
  }

  async findOne(id: string) {
    return await this.labrlModel.findById(id);
  }

  async update(id: string, updateLabelInput: UpdateLabelInput) {
    const labrl = await this.labrlModel
      .findByIdAndUpdate(id, updateLabelInput)
      .setOptions({ new: true });
    if (!labrl) {
      throw new NotFoundException();
    }
    return labrl;
  }

  async remove(id: string) {
    return await this.labrlModel.findByIdAndRemove(id);
  }
}
