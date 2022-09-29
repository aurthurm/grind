import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOccurrenceInput } from './dto/create-occurrence.input';
import { Occurrence, OccurrenceDocument } from './entities/occurrence.entity';

@Injectable()
export class OccurrenceService {
  constructor(
    @InjectModel(Occurrence.name)
    private occurrenceModel: Model<OccurrenceDocument>,
  ) {}

  async create(createOccurrenceInput: CreateOccurrenceInput | any) {
    const occurrence = new this.occurrenceModel(createOccurrenceInput);
    return await occurrence.save();
  }

  find(target: string, targetId: string) {
    return this.occurrenceModel.find({
      target,
      targetId,
    });
  }
}
