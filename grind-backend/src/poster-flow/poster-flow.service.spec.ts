import { Test, TestingModule } from '@nestjs/testing';
import { PosterFlowService } from './poster-flow.service';

describe('PosterFlowService', () => {
  let service: PosterFlowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PosterFlowService],
    }).compile();

    service = module.get<PosterFlowService>(PosterFlowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
