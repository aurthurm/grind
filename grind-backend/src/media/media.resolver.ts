import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MediaService } from './media.service';
import { Media } from './entities/media.entity';
import { CreateMediaInput } from './dto/create-media.input';
import { UpdateMediaInput } from './dto/update-media.input';

@Resolver(() => Media)
export class MediaResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Mutation(() => Media)
  async createMedia(
    @Args('createMediaInput') createMediaInput: CreateMediaInput,
  ) {
    return await this.mediaService.create(createMediaInput);
  }

  @Query(() => [Media], { name: 'media' })
  async findAll() {
    return await this.mediaService.findAll();
  }

  @Query(() => Media, { name: 'media' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.mediaService.findOne(id);
  }

  @Mutation(() => Media)
  async updateMedia(
    @Args('updateMediaInput') updateMediaInput: UpdateMediaInput,
  ) {
    return await this.mediaService.update(
      updateMediaInput.id,
      updateMediaInput,
    );
  }

  @Mutation(() => Media)
  async removeMedia(@Args('id', { type: () => Int }) id: number) {
    return await this.mediaService.remove(id);
  }
}
