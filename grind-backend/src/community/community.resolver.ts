import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommunityService } from './community.service';
import { Community } from './entities/community.entity';
import { CreateCommunityInput } from './dto/create-community.input';
import { UpdateCommunityInput } from './dto/update-community.input';
import { GqlAuthGuard, GqlCurrentUser } from 'src/auth/gql-auth.guard';
import { User } from 'src/user/entities/user.entity';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Community)
@UseGuards(GqlAuthGuard)
export class CommunityResolver {
  constructor(private readonly communityService: CommunityService) {}

  @Mutation(() => Community)
  async createCommunity(
    @Args('createCommunityInput') createCommunityInput: CreateCommunityInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.communityService.create({
      ...createCommunityInput,
      createdBy: user._id?.toString(),
      updatedBy: user._id?.toString(),
    });
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
    @GqlCurrentUser() user: User,
  ) {
    return await this.communityService.update(updateCommunityInput.id, {
      ...updateCommunityInput,
      updatedBy: user._id?.toString(),
    });
  }

  @Mutation(() => Community)
  async removeCommunity(@Args('id', { type: () => Int }) id: string) {
    return await this.communityService.remove(id);
  }
}
