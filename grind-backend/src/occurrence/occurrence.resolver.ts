import { Resolver, Query, Args } from '@nestjs/graphql';
import { OccurrenceService } from './occurrence.service';
import { Occurrence } from './entities/occurrence.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';

@Resolver(() => Occurrence)
@UseGuards(GqlAuthGuard)
export class OccurrenceResolver {
  constructor(private readonly occurrenceService: OccurrenceService) {}

  @Query(() => [Occurrence], { name: 'occurrences' })
  async find(
    @Args('target', { type: () => String }) target: string,
    @Args('targetId', { type: () => String }) targetId: string,
  ) {
    return await this.occurrenceService.find(target, targetId);
  }
}
