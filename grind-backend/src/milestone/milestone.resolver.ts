import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MilestoneService } from './milestone.service';
import { Milestone } from './entities/milestone.entity';
import { CreateMilestoneInput } from './dto/create-milestone.input';
import { UpdateMilestoneInput } from './dto/update-milestone.input';
import { GqlAuthGuard, GqlCurrentUser } from 'src/auth/gql-auth.guard';
import { User } from 'src/user/entities/user.entity';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Milestone)
@UseGuards(GqlAuthGuard)
export class MilestoneResolver {
  constructor(private readonly milestoneService: MilestoneService) {}

  @Mutation(() => Milestone)
  async createMilestone(
    @Args('createMilestoneInput') createMilestoneInput: CreateMilestoneInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.milestoneService.create({
      ...createMilestoneInput,
      createdBy: user._id?.toString(),
      updatedBy: user._id?.toString(),
    });
  }

  @Query(() => Milestone, { name: 'milestone' })
  async findOne(@Args('id', { type: () => Int }) id: string) {
    return await this.milestoneService.findOne(id);
  }

  @Query(() => [Milestone], { name: 'milestones' })
  async find(@Args('errand', { type: () => String }) errand: string) {
    return await this.milestoneService.find(errand);
  }

  @Mutation(() => Milestone)
  async updateMilestone(
    @Args('updateMilestoneInput') updateMilestoneInput: UpdateMilestoneInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.milestoneService.update(updateMilestoneInput.id, {
      ...updateMilestoneInput,
      updatedBy: user._id?.toString(),
    });
  }

  @Mutation(() => Milestone)
  async removeMilestone(@Args('id', { type: () => String }) id: string) {
    return await this.milestoneService.remove(id);
  }
}
