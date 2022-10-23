import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LabelService } from './label.service';
import { Label } from './entities/label.entity';
import { CreateLabelInput } from './dto/create-label.input';
import { UpdateLabelInput } from './dto/update-label.input';
import { GqlAuthGuard, GqlCurrentUser } from 'src/auth/gql-auth.guard';
import { User } from 'src/user/entities/user.entity';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Label)
@UseGuards(GqlAuthGuard)
export class LabelResolver {
  constructor(private readonly labelService: LabelService) {}

  @Mutation(() => Label)
  async createLabel(
    @Args('createLabelInput') createLabelInput: CreateLabelInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.labelService.create({
      ...createLabelInput,
      createdBy: user._id.toString(),
      updatedBy: user._id.toString(),
    });
  }

  @Query(() => [Label], { name: 'labels' })
  async findAll() {
    return await this.labelService.findAll();
  }

  @Query(() => [Label], { name: 'query' })
  async query(@Args('category', { type: () => String }) category?: string) {
    return await this.labelService.findAll({ category });
  }

  @Query(() => Label, { name: 'label' })
  async findOne(@Args('id', { type: () => Int }) id: string) {
    return await this.labelService.findOne(id);
  }

  @Mutation(() => Label)
  async updateLabel(
    @Args('updateLabelInput') updateLabelInput: UpdateLabelInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.labelService.update(updateLabelInput.id, {
      ...updateLabelInput,
      updatedBy: user._id.toString(),
    });
  }

  @Mutation(() => Label)
  async removeLabel(@Args('id', { type: () => Int }) id: string) {
    return await this.labelService.remove(id);
  }
}
