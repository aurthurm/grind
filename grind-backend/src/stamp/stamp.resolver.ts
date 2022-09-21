import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StampService } from './stamp.service';
import { Stamp } from './entities/stamp.entity';
import { CreateStampInput } from './dto/create-stamp.input';
import { UpdateStampInput } from './dto/update-stamp.input';

@Resolver(() => Stamp)
export class StampResolver {
  constructor(private readonly stampService: StampService) {}

  @Mutation(() => Stamp)
  async createStamp(
    @Args('createStampInput') createStampInput: CreateStampInput,
  ) {
    return await this.stampService.create(createStampInput);
  }

  @Query(() => [Stamp], { name: 'stamp' })
  async findAll() {
    return await this.stampService.findAll();
  }

  @Query(() => Stamp, { name: 'stamp' })
  async findOne(@Args('id', { type: () => Int }) id: string) {
    return await this.stampService.findOne(id);
  }

  @Mutation(() => Stamp)
  async updateStamp(
    @Args('updateStampInput') updateStampInput: UpdateStampInput,
  ) {
    return await this.stampService.update(
      updateStampInput.id,
      updateStampInput,
    );
  }

  @Mutation(() => Stamp)
  async removeStamp(@Args('id', { type: () => Int }) id: string) {
    return await this.stampService.remove(id);
  }
}
