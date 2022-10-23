import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PosterService } from './poster.service';
import { Poster } from './entities/poster.entity';
import { CreatePosterInput } from './dto/create-poster.input';
import { UpdatePosterInput } from './dto/update-poster.input';
import { GqlAuthGuard, GqlCurrentUser } from 'src/auth/gql-auth.guard';
import { User } from 'src/user/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { Errand } from 'src/errand/entities/errand.entity';
import { ErrandService } from 'src/errand/errand.service';

@Resolver(() => Poster)
@UseGuards(GqlAuthGuard)
export class PosterResolver {
  constructor(
    private readonly posterService: PosterService,
    private readonly errandService: ErrandService,
  ) {}

  @Mutation(() => Poster)
  async createPoster(
    @Args('createPosterInput') createPosterInput: CreatePosterInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.posterService.create({
      ...createPosterInput,
      createdBy: user._id?.toString(),
      updatedBy: user._id?.toString(),
    });
  }

  @Query(() => [Poster], { name: 'posters' })
  async find(@Args('board', { type: () => String }) board: string) {
    return await this.posterService.findAll({ board });
  }

  @Query(() => Poster, { name: 'poster' })
  async findOne(@Args('id', { type: () => Int }) id: string) {
    return await this.posterService.findOne(id);
  }

  @Mutation(() => Poster)
  async updatePoster(
    @Args('updatePosterInput') updatePosterInput: UpdatePosterInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.posterService.update(updatePosterInput.id, {
      ...updatePosterInput,
      updatedBy: user._id?.toString(),
    });
  }

  @Mutation(() => Poster)
  async removePoster(@Args('id', { type: () => Int }) id: string) {
    return await this.posterService.remove(id);
  }

  @ResolveField()
  async errands(@Parent() poster: Poster) {
    const { _id } = poster;
    return this.errandService.findAll({ poster: _id });
  }
}
