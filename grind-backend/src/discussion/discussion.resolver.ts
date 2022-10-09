import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DiscussionService } from './discussion.service';
import { Discussion } from './entities/discussion.entity';
import { CreateDiscussionInput } from './dto/create-discussion.input';
import { UpdateDiscussionInput } from './dto/update-discussion.input';
import { GqlAuthGuard, GqlCurrentUser } from 'src/auth/gql-auth.guard';
import { User } from 'src/user/entities/user.entity';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Discussion)
@UseGuards(GqlAuthGuard)
export class DiscussionResolver {
  constructor(private readonly discussionService: DiscussionService) {}

  @Mutation(() => Discussion)
  async createDiscussion(
    @Args('createDiscussionInput') createDiscussionInput: CreateDiscussionInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.discussionService.create({
      ...createDiscussionInput,
      createdBy: user._id.toString(),
      updatedBy: user._id.toString(),
    });
  }

  @Query(() => [Discussion], { name: 'discussions' })
  async findAll(
    @Args('id', { type: () => String, nullable: true }) id: string,
  ) {
    return await this.discussionService.findByErrand(id);
  }

  @Query(() => Discussion, { name: 'discussion' })
  async findOne(@Args('id', { type: () => String }) id: string) {
    return await this.discussionService.findOne(id);
  }

  @Mutation(() => Discussion)
  async updateDiscussion(
    @Args('updateDiscussionInput') updateDiscussionInput: UpdateDiscussionInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.discussionService.update(updateDiscussionInput.id, {
      ...updateDiscussionInput,
      updatedBy: user._id.toString(),
    });
  }

  @Mutation(() => Discussion)
  async removeDiscussion(@Args('id', { type: () => Int }) id: string) {
    return await this.discussionService.remove(id);
  }
}
