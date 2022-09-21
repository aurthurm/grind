import { Test, TestingModule } from '@nestjs/testing';
import { SchemeResolver } from './scheme.resolver';
import { SchemeService } from './scheme.service';

describe('SchemeResolver', () => {
  let resolver: SchemeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchemeResolver, SchemeService],
    }).compile();

    resolver = module.get<SchemeResolver>(SchemeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
