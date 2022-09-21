import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSchemeInput } from './dto/create-scheme.input';
import { UpdateSchemeInput } from './dto/update-scheme.input';
import { Scheme, SchemeDocument } from './entities/scheme.entity';

@Injectable()
export class SchemeService {
  constructor(
    @InjectModel(Scheme.name)
    private schemeModel: Model<SchemeDocument>,
  ) {}

  async create(createSchemeInput: CreateSchemeInput) {
    const scheme = new this.schemeModel(createSchemeInput);
    return scheme.save();
  }

  async findAll() {
    return await this.schemeModel.find().exec();
  }

  async findOne(id: string) {
    return await this.schemeModel.findById(id);
  }

  async update(id: string, updateSchemeInput: UpdateSchemeInput) {
    const scheme = await this.schemeModel
      .findByIdAndUpdate(id, updateSchemeInput)
      .setOptions({ new: true });
    if (!scheme) {
      throw new NotFoundException();
    }
    return scheme;
  }

  async remove(id: string) {
    return await this.schemeModel.findByIdAndRemove(id);
  }
}
