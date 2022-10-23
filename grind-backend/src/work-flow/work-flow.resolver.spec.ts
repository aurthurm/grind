import { Test, TestingModule } from '@nestjs/testing';
import { WorkFlowResolver } from './work-flow.resolver';
import { WorkFlowService } from './work-flow.service';

describe('WorkFlowResolver', () => {
  let resolver: WorkFlowResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkFlowResolver, WorkFlowService],
    }).compile();

    resolver = module.get<WorkFlowResolver>(WorkFlowResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
