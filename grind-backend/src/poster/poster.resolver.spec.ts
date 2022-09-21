import { Test, TestingModule } from '@nestjs/testing';
import { PosterResolver } from './poster.resolver';
import { PosterService } from './poster.service';

describe('PosterResolver', () => {
  let resolver: PosterResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PosterResolver, PosterService],
    }).compile();

    resolver = module.get<PosterResolver>(PosterResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
