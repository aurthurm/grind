import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommunityInput } from './dto/create-community.input';
import { UpdateCommunityInput } from './dto/update-community.input';
import { Community, CommunityDocument } from './entities/community.entity';

@Injectable()
export class CommunityService {
  constructor(
    @InjectModel(Community.name)
    private communityModel: Model<CommunityDocument>,
  ) {}

  async create(createCommunityInput: CreateCommunityInput) {
    const community = new this.communityModel(createCommunityInput);
    return community.save();
  }

  async findAll() {
    return await this.communityModel.find().exec();
  }

  async findOne(id: string) {
    return await this.communityModel.findById(id);
  }

  async update(id: string, updateCommunityInput: UpdateCommunityInput) {
    const community = await this.communityModel
      .findByIdAndUpdate(id, updateCommunityInput)
      .setOptions({ new: true });
    if (!community) {
      throw new NotFoundException();
    }
    return community;
  }

  async remove(id: string) {
    return await this.communityModel.findByIdAndRemove(id);
  }
}
