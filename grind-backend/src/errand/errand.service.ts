import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateErrandInput } from './dto/create-errand.input';
import { UpdateErrandInput } from './dto/update-errand.input';
import { Errand, ErrandDocument } from './entities/errand.entity';

@Injectable()
export class ErrandService {
  constructor(
    @InjectModel(Errand.name)
    private errandModel: Model<ErrandDocument>,
  ) {}

  async create(createErrandInput: CreateErrandInput) {
    const errand = new this.errandModel(createErrandInput);
    return errand.save();
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
    return errand;
  }

  async remove(id: string) {
    return await this.errandModel.findByIdAndRemove(id);
  }
}
