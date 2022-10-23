import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStampInput } from './dto/create-stamp.input';
import { UpdateStampInput } from './dto/update-stamp.input';
import { Stamp, StampDocument } from './entities/stamp.entity';

@Injectable()
export class StampService {
  constructor(
    @InjectModel(Stamp.name)
    private stampModel: Model<StampDocument>,
  ) {}

  async create(createStampInput: CreateStampInput | any) {
    const stamp = new this.stampModel(createStampInput);
    return stamp.save();
  }

  async findAll(query = {}) {
    return await this.stampModel.find(query).exec();
  }

  async findOne(id: string) {
    return await this.stampModel.findById(id);
  }

  async update(id: string, updateStampInput: UpdateStampInput) {
    const stamp = await this.stampModel
      .findByIdAndUpdate(id, updateStampInput)
      .setOptions({ new: true });
    if (!stamp) {
      throw new NotFoundException();
    }
    return stamp;
  }

  async remove(id: string) {
    return await this.stampModel.findByIdAndRemove(id);
  }
}
