import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LabelService } from './label.service';
import { Label } from './entities/label.entity';
import { CreateLabelInput } from './dto/create-label.input';
import { UpdateLabelInput } from './dto/update-label.input';

@Resolver(() => Label)
export class LabelResolver {
  constructor(private readonly labelService: LabelService) {}

  @Mutation(() => Label)
  async createLabel(
    @Args('createLabelInput') createLabelInput: CreateLabelInput,
  ) {
    return await this.labelService.create(createLabelInput);
  }

  @Query(() => [Label], { name: 'label' })
  async findAll() {
    return await this.labelService.findAll();
  }

  @Query(() => Label, { name: 'label' })
  async findOne(@Args('id', { type: () => Int }) id: string) {
    return await this.labelService.findOne(id);
  }

  @Mutation(() => Label)
  async updateLabel(
    @Args('updateLabelInput') updateLabelInput: UpdateLabelInput,
  ) {
    return await this.labelService.update(
      updateLabelInput.id,
      updateLabelInput,
    );
  }

  @Mutation(() => Label)
  async removeLabel(@Args('id', { type: () => Int }) id: string) {
    return await this.labelService.remove(id);
  }
}
