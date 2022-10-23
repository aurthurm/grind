import { Module } from '@nestjs/common';
import { PosterFlowService } from './poster-flow.service';
import { PosterFlowResolver } from './poster-flow.resolver';

@Module({
  providers: [PosterFlowResolver, PosterFlowService]
})
export class PosterFlowModule {}
