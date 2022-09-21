import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MilestoneService } from './milestone.service';
import { Milestone } from './entities/milestone.entity';
import { CreateMilestoneInput } from './dto/create-milestone.input';
import { UpdateMilestoneInput } from './dto/update-milestone.input';

@Resolver(() => Milestone)
export class MilestoneResolver {
  constructor(private readonly milestoneService: MilestoneService) {}

  @Mutation(() => Milestone)
  async createMilestone(
    @Args('createMilestoneInput') createMilestoneInput: CreateMilestoneInput,
  ) {
    return await this.milestoneService.create(createMilestoneInput);
  }

  @Query(() => [Milestone], { name: 'milestone' })
  async findAll() {
    return await this.milestoneService.findAll();
  }

  @Query(() => Milestone, { name: 'milestone' })
  async findOne(@Args('id', { type: () => Int }) id: string) {
    return await this.milestoneService.findOne(id);
  }

  @Mutation(() => Milestone)
  async updateMilestone(
    @Args('updateMilestoneInput') updateMilestoneInput: UpdateMilestoneInput,
  ) {
    return await this.milestoneService.update(
      updateMilestoneInput.id,
      updateMilestoneInput,
    );
  }

  @Mutation(() => Milestone)
  async removeMilestone(@Args('id', { type: () => Int }) id: string) {
    return await this.milestoneService.remove(id);
  }
}
