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
    let scheme = new this.schemeModel(createSchemeInput);
    scheme = await scheme.save();
    return await this.findOne(scheme._id);
  }

  async findAll() {
    return await this.schemeModel
      .find()
      .populate('assignee')
      .populate('members')
      .populate('createdBy')
      .populate('updatedBy')
      .exec();
  }

  async findOne(id: string) {
    return await this.schemeModel
      .findById(id)
      .populate('assignee')
      .populate('members')
      .populate('createdBy')
      .populate('updatedBy')
      .exec();
  }

  async update(id: string, updateSchemeInput: UpdateSchemeInput) {
    const scheme = await this.schemeModel
      .findByIdAndUpdate(id, updateSchemeInput)
      .setOptions({ new: true })
      .populate('assignee')
      .populate('members')
      .populate('createdBy')
      .populate('updatedBy')
      .exec();
    if (!scheme) {
      throw new NotFoundException();
    }
    return scheme;
  }

  async remove(id: string) {
    return await this.schemeModel.findByIdAndRemove(id);
  }
}
