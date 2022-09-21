import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PosterService } from './poster.service';
import { Poster } from './entities/poster.entity';
import { CreatePosterInput } from './dto/create-poster.input';
import { UpdatePosterInput } from './dto/update-poster.input';

@Resolver(() => Poster)
export class PosterResolver {
  constructor(private readonly posterService: PosterService) {}

  @Mutation(() => Poster)
  async createPoster(
    @Args('createPosterInput') createPosterInput: CreatePosterInput,
  ) {
    return await this.posterService.create(createPosterInput);
  }

  @Query(() => [Poster], { name: 'poster' })
  async findAll() {
    return await this.posterService.findAll();
  }

  @Query(() => Poster, { name: 'poster' })
  async findOne(@Args('id', { type: () => Int }) id: string) {
    return await this.posterService.findOne(id);
  }

  @Mutation(() => Poster)
  async updatePoster(
    @Args('updatePosterInput') updatePosterInput: UpdatePosterInput,
  ) {
    return await this.posterService.update(
      updatePosterInput.id,
      updatePosterInput,
    );
  }

  @Mutation(() => Poster)
  async removePoster(@Args('id', { type: () => Int }) id: string) {
    return await this.posterService.remove(id);
  }
}
