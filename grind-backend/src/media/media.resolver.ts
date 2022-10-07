import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { deleteFile } from 'src/utils/upload';
import { Media } from './entities/media.entity';
import { MediaService } from './media.service';

@Resolver(() => Media)
export class MediaResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Query(() => [Media], { name: 'medias' })
  async find(
    @Args('target', { type: () => String }) target: string,
    @Args('targetId', { type: () => String }) targetId: string,
  ) {
    return await this.mediaService.find(target, targetId);
  }
}
