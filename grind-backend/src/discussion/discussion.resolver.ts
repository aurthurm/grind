import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DiscussionService } from './discussion.service';
import { Discussion } from './entities/discussion.entity';
import { CreateDiscussionInput } from './dto/create-discussion.input';
import { UpdateDiscussionInput } from './dto/update-discussion.input';

@Resolver(() => Discussion)
export class DiscussionResolver {
  constructor(private readonly discussionService: DiscussionService) {}

  @Mutation(() => Discussion)
  async createDiscussion(
    @Args('createDiscussionInput') createDiscussionInput: CreateDiscussionInput,
  ) {
    return await this.discussionService.create(createDiscussionInput);
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
  ) {
    return await this.discussionService.update(
      updateDiscussionInput.id,
      updateDiscussionInput,
    );
  }

  @Mutation(() => Discussion)
  async removeDiscussion(@Args('id', { type: () => Int }) id: string) {
    return await this.discussionService.remove(id);
  }
}
