import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDiscussionInput } from './dto/create-discussion.input';
import { UpdateDiscussionInput } from './dto/update-discussion.input';
import { Discussion, DiscussionDocument } from './entities/discussion.entity';

@Injectable()
export class DiscussionService {
  constructor(
    @InjectModel(Discussion.name)
    private discussionModel: Model<DiscussionDocument>,
  ) {}

  async create(createDiscussionInput: CreateDiscussionInput) {
    const discussion = new this.discussionModel(createDiscussionInput);
    await discussion.save();
    return await this.findOne(discussion._id);
  }

  async findByErrand(errandId: string) {
    return await this.discussionModel
      .find({ errand: errandId })
      .populate('createdBy')
      .exec();
  }

  async findAll() {
    return await this.discussionModel.find().populate('createdBy').exec();
  }

  async findOne(id: string) {
    return await this.discussionModel.findById(id).populate('createdBy').exec();
  }

  async update(id: string, updateDiscussionInput: UpdateDiscussionInput) {
    const discussion = await this.discussionModel
      .findByIdAndUpdate(id, updateDiscussionInput)
      .setOptions({ new: true })
      .populate('createdBy')
      .exec();
    if (!discussion) {
      throw new NotFoundException();
    }
    return discussion;
  }

  async remove(id: string) {
    return await this.discussionModel.findByIdAndRemove(id);
  }
}
