import { Injectable } from '@nestjs/common';
import { CreatePosterFlowInput } from './dto/create-poster-flow.input';
import { UpdatePosterFlowInput } from './dto/update-poster-flow.input';

@Injectable()
export class PosterFlowService {
  create(createPosterFlowInput: CreatePosterFlowInput) {
    return 'This action adds a new posterFlow';
  }

  findAll() {
    return `This action returns all posterFlow`;
  }

  findOne(id: number) {
    return `This action returns a #${id} posterFlow`;
  }

  update(id: number, updatePosterFlowInput: UpdatePosterFlowInput) {
    return `This action updates a #${id} posterFlow`;
  }

  remove(id: number) {
    return `This action removes a #${id} posterFlow`;
  }
}
