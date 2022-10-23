import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PosterFlowService } from './poster-flow.service';
import { PosterFlow } from './entities/poster-flow.entity';
import { CreatePosterFlowInput } from './dto/create-poster-flow.input';
import { UpdatePosterFlowInput } from './dto/update-poster-flow.input';

@Resolver(() => PosterFlow)
export class PosterFlowResolver {
  constructor(private readonly posterFlowService: PosterFlowService) {}

  @Mutation(() => PosterFlow)
  createPosterFlow(@Args('createPosterFlowInput') createPosterFlowInput: CreatePosterFlowInput) {
    return this.posterFlowService.create(createPosterFlowInput);
  }

  @Query(() => [PosterFlow], { name: 'posterFlow' })
  findAll() {
    return this.posterFlowService.findAll();
  }

  @Query(() => PosterFlow, { name: 'posterFlow' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.posterFlowService.findOne(id);
  }

  @Mutation(() => PosterFlow)
  updatePosterFlow(@Args('updatePosterFlowInput') updatePosterFlowInput: UpdatePosterFlowInput) {
    return this.posterFlowService.update(updatePosterFlowInput.id, updatePosterFlowInput);
  }

  @Mutation(() => PosterFlow)
  removePosterFlow(@Args('id', { type: () => Int }) id: number) {
    return this.posterFlowService.remove(id);
  }
}
