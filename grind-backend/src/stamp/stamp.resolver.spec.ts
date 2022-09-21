import { Test, TestingModule } from '@nestjs/testing';
import { StampResolver } from './stamp.resolver';
import { StampService } from './stamp.service';

describe('StampResolver', () => {
  let resolver: StampResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StampResolver, StampService],
    }).compile();

    resolver = module.get<StampResolver>(StampResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
