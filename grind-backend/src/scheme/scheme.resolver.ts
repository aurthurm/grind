import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SchemeService } from './scheme.service';
import { Scheme } from './entities/scheme.entity';
import { CreateSchemeInput } from './dto/create-scheme.input';
import { UpdateSchemeInput } from './dto/update-scheme.input';

@Resolver(() => Scheme)
export class SchemeResolver {
  constructor(private readonly schemeService: SchemeService) {}

  @Mutation(() => Scheme)
  async createScheme(
    @Args('createSchemeInput') createSchemeInput: CreateSchemeInput,
  ) {
    return await this.schemeService.create(createSchemeInput);
  }

  @Query(() => [Scheme], { name: 'scheme' })
  async findAll() {
    return await this.schemeService.findAll();
  }

  @Query(() => Scheme, { name: 'scheme' })
  async findOne(@Args('id', { type: () => Int }) id: string) {
    return await this.schemeService.findOne(id);
  }

  @Mutation(() => Scheme)
  async updateScheme(
    @Args('updateSchemeInput') updateSchemeInput: UpdateSchemeInput,
  ) {
    return await this.schemeService.update(
      updateSchemeInput.id,
      updateSchemeInput,
    );
  }

  @Mutation(() => Scheme)
  async removeScheme(@Args('id', { type: () => Int }) id: string) {
    return await this.schemeService.remove(id);
  }
}
