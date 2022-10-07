import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMediaInput } from './dto/create-media.input';
import { UpdateMediaInput } from './dto/update-media.input';
import { Media, MediaDocument } from './entities/media.entity';

@Injectable()
export class MediaService {
  constructor(
    @InjectModel(Media.name)
    private mediaModel: Model<MediaDocument>,
  ) {}

  async create(payload: CreateMediaInput | any) {
    const occurrence = new this.mediaModel(payload);
    return await occurrence.save();
  }

  async find(target: string, targetId: string) {
    console.log(target, targetId);
    return await this.mediaModel
      .find({ target, targetId })
      .sort({ createdAt: -1 })
      .populate('createdBy')
      .exec();
  }

  async remove(id: string) {
    return await this.mediaModel.findByIdAndRemove(id);
  }
}
