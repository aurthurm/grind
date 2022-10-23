import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StampService } from './stamp.service';
import { Stamp } from './entities/stamp.entity';
import { CreateStampInput } from './dto/create-stamp.input';
import { UpdateStampInput } from './dto/update-stamp.input';
import { GqlAuthGuard, GqlCurrentUser } from 'src/auth/gql-auth.guard';
import { User } from 'src/user/entities/user.entity';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Stamp)
@UseGuards(GqlAuthGuard)
export class StampResolver {
  constructor(private readonly stampService: StampService) {}

  @Mutation(() => Stamp)
  async createStamp(
    @Args('createStampInput') createStampInput: CreateStampInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.stampService.create({
      ...createStampInput,
      createdBy: user._id?.toString(),
      updatedBy: user._id?.toString(),
    });
  }

  @Query(() => [Stamp], { name: 'stamps' })
  async findAll() {
    return await this.stampService.findAll();
  }

  @Query(() => [Stamp], { name: 'query' })
  async query(@Args('category', { type: () => String }) category?: string) {
    return await this.stampService.findAll({ category });
  }

  @Query(() => Stamp, { name: 'stamp' })
  async findOne(@Args('id', { type: () => Int }) id: string) {
    return await this.stampService.findOne(id);
  }

  @Mutation(() => Stamp)
  async updateStamp(
    @Args('updateStampInput') updateStampInput: UpdateStampInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.stampService.update(updateStampInput.id, {
      ...updateStampInput,
      updatedBy: user._id?.toString(),
    });
  }

  @Mutation(() => Stamp)
  async removeStamp(@Args('id', { type: () => Int }) id: string) {
    return await this.stampService.remove(id);
  }
}
