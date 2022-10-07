import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMilestoneInput } from './dto/create-milestone.input';
import { UpdateMilestoneInput } from './dto/update-milestone.input';
import { Milestone, MilestoneDocument } from './entities/milestone.entity';

@Injectable()
export class MilestoneService {
  constructor(
    @InjectModel(Milestone.name)
    private milestoneModel: Model<MilestoneDocument>,
  ) {}

  async create(createMilestoneInput: CreateMilestoneInput) {
    const milestone = new this.milestoneModel(createMilestoneInput);
    return milestone.save();
  }

  async find(errand: string) {
    return await this.milestoneModel
      .find({ errand })
      .sort({ createdAt: -1 })
      .populate('assignee')
      .exec();
  }

  async findOne(id: string) {
    return await this.milestoneModel.findById(id);
  }

  async update(id: string, updateMilestoneInput: UpdateMilestoneInput) {
    const milestone = await this.milestoneModel
      .findByIdAndUpdate(id, updateMilestoneInput)
      .setOptions({ new: true });
    if (!milestone) {
      throw new NotFoundException();
    }
    return milestone;
  }

  async remove(id: string) {
    return await this.milestoneModel.findByIdAndRemove(id);
  }
}
