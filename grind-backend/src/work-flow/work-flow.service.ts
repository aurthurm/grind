import { Injectable } from '@nestjs/common';
import { CreateWorkFlowInput } from './dto/create-work-flow.input';
import { UpdateWorkFlowInput } from './dto/update-work-flow.input';

@Injectable()
export class WorkFlowService {
  create(createWorkFlowInput: CreateWorkFlowInput) {
    return 'This action adds a new workFlow';
  }

  findAll() {
    return `This action returns all workFlow`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workFlow`;
  }

  update(id: number, updateWorkFlowInput: UpdateWorkFlowInput) {
    return `This action updates a #${id} workFlow`;
  }

  remove(id: number) {
    return `This action removes a #${id} workFlow`;
  }
}
