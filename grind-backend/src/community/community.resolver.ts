import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommunityService } from './community.service';
import { Community } from './entities/community.entity';
import { CreateCommunityInput } from './dto/create-community.input';
import { UpdateCommunityInput } from './dto/update-community.input';

@Resolver(() => Community)
export class CommunityResolver {
  constructor(private readonly communityService: CommunityService) {}

  @Mutation(() => Community)
  async createCommunity(
    @Args('createCommunityInput') createCommunityInput: CreateCommunityInput,
  ) {
    return await this.communityService.create(createCommunityInput);
  }

  @Query(() => [Community], { name: 'communities' })
  async findAll() {
    return await this.communityService.findAll();
  }

  @Query(() => Community, { name: 'community' })
  async findOne(@Args('id', { type: () => Int }) id: string) {
    return await this.communityService.findOne(id);
  }

  @Mutation(() => Community)
  async updateCommunity(
    @Args('updateCommunityInput') updateCommunityInput: UpdateCommunityInput,
  ) {
    return await this.communityService.update(
      updateCommunityInput.id,
      updateCommunityInput,
    );
  }

  @Mutation(() => Community)
  async removeCommunity(@Args('id', { type: () => Int }) id: string) {
    return await this.communityService.remove(id);
  }
}
