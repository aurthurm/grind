import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ErrandService } from './errand.service';
import { Errand } from './entities/errand.entity';
import { CreateErrandInput } from './dto/create-errand.input';
import { UpdateErrandInput } from './dto/update-errand.input';
import { GqlAuthGuard, GqlCurrentUser } from 'src/auth/gql-auth.guard';
import { User } from 'src/user/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { MilestoneService } from 'src/milestone/milestone.service';

@Resolver(() => Errand)
@UseGuards(GqlAuthGuard)
export class ErrandResolver {
  constructor(
    private readonly errandService: ErrandService,
    private readonly milestoneService: MilestoneService,
  ) {}

  @Mutation(() => Errand)
  async createErrand(
    @Args('createErrandInput') createErrandInput: CreateErrandInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.errandService.create({
      ...createErrandInput,
      createdBy: user._id.toString(),
      updatedBy: user._id.toString(),
    });
  }

  // @UseGuards(GqlAuthGuard)
  @Query(() => [Errand], { name: 'errands' })
  async findAll(@Args('filters') filters: CreateErrandInput) {
    return await this.errandService.findAll(filters);
  }

  @Query(() => Errand, { name: 'errand' })
  async findOne(@Args('id', { type: () => String }) id: string) {
    return await this.errandService.findOne(id);
  }

  @Mutation(() => Errand)
  async updateErrand(
    @Args('updateErrandInput') updateErrandInput: UpdateErrandInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.errandService.update(updateErrandInput.id, {
      ...updateErrandInput,
      updatedBy: user._id?.toString(),
    });
  }

  @Mutation(() => Errand)
  async removeErrand(@Args('id', { type: () => Int }) id: string) {
    return await this.errandService.remove(id);
  }

  @ResolveField()
  async progress(@Parent() errand: Errand) {
    const { _id } = errand;
    const milestones = await this.milestoneService.find(_id.toString());
    if (milestones.length === 0) return 100;
    const complete = milestones.reduce((acc, milestone) => {
      if (milestone?.complete ?? false) {
        return acc + 1;
      }
      return acc;
    }, 0);
    return Math.floor((complete / milestones.length) * 100);
  }
}
