import { Test, TestingModule } from '@nestjs/testing';
import { ErrandResolver } from './errand.resolver';
import { ErrandService } from './errand.service';

describe('ErrandResolver', () => {
  let resolver: ErrandResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErrandResolver, ErrandService],
    }).compile();

    resolver = module.get<ErrandResolver>(ErrandResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
