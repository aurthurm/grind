import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ErrandService } from './errand.service';
import { Errand } from './entities/errand.entity';
import { CreateErrandInput } from './dto/create-errand.input';
import { UpdateErrandInput } from './dto/update-errand.input';
import { GqlCurrentUser } from 'src/auth/gql-auth.guard';
import { User } from 'src/user/entities/user.entity';

@Resolver(() => Errand)
export class ErrandResolver {
  constructor(private readonly errandService: ErrandService) {}

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
  async findAll() {
    return await this.errandService.findAll();
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
}
