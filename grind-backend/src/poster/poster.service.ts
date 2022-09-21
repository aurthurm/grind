import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePosterInput } from './dto/create-poster.input';
import { UpdatePosterInput } from './dto/update-poster.input';
import { Poster, PosterDocument } from './entities/poster.entity';

@Injectable()
export class PosterService {
  constructor(
    @InjectModel(Poster.name)
    private posterModel: Model<PosterDocument>,
  ) {}

  async create(createPosterInput: CreatePosterInput) {
    const poster = new this.posterModel(createPosterInput);
    return poster.save();
  }

  async findAll() {
    return await this.posterModel.find().exec();
  }

  async findOne(id: string) {
    return await this.posterModel.findById(id);
  }

  async update(id: string, updatePosterInput: UpdatePosterInput) {
    const poster = await this.posterModel
      .findByIdAndUpdate(id, updatePosterInput)
      .setOptions({ new: true });
    if (!poster) {
      throw new NotFoundException();
    }
    return poster;
  }

  async remove(id: string) {
    return await this.posterModel.findByIdAndRemove(id);
  }
}
