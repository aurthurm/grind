import { Test, TestingModule } from '@nestjs/testing';
import { PosterFlowResolver } from './poster-flow.resolver';
import { PosterFlowService } from './poster-flow.service';

describe('PosterFlowResolver', () => {
  let resolver: PosterFlowResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PosterFlowResolver, PosterFlowService],
    }).compile();

    resolver = module.get<PosterFlowResolver>(PosterFlowResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
