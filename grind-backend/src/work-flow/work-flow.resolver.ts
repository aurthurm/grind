import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WorkFlowService } from './work-flow.service';
import { WorkFlow } from './entities/work-flow.entity';
import { CreateWorkFlowInput } from './dto/create-work-flow.input';
import { UpdateWorkFlowInput } from './dto/update-work-flow.input';

@Resolver(() => WorkFlow)
export class WorkFlowResolver {
  constructor(private readonly workFlowService: WorkFlowService) {}

  @Mutation(() => WorkFlow)
  createWorkFlow(@Args('createWorkFlowInput') createWorkFlowInput: CreateWorkFlowInput) {
    return this.workFlowService.create(createWorkFlowInput);
  }

  @Query(() => [WorkFlow], { name: 'workFlow' })
  findAll() {
    return this.workFlowService.findAll();
  }

  @Query(() => WorkFlow, { name: 'workFlow' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.workFlowService.findOne(id);
  }

  @Mutation(() => WorkFlow)
  updateWorkFlow(@Args('updateWorkFlowInput') updateWorkFlowInput: UpdateWorkFlowInput) {
    return this.workFlowService.update(updateWorkFlowInput.id, updateWorkFlowInput);
  }

  @Mutation(() => WorkFlow)
  removeWorkFlow(@Args('id', { type: () => Int }) id: number) {
    return this.workFlowService.remove(id);
  }
}
