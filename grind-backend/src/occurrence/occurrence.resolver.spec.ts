import { Test, TestingModule } from '@nestjs/testing';
import { OccurrenceResolver } from './occurrence.resolver';
import { OccurrenceService } from './occurrence.service';

describe('OccurrenceResolver', () => {
  let resolver: OccurrenceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OccurrenceResolver, OccurrenceService],
    }).compile();

    resolver = module.get<OccurrenceResolver>(OccurrenceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
