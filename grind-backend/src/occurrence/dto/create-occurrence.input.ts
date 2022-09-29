import { InputType, Field } from '@nestjs/graphql';
import { OccurreneTarget } from 'src/helpers/constants';

@InputType()
export class CreateOccurrenceInput {
  @Field(() => OccurreneTarget, {
    description: 'Poster category',
    nullable: true,
  })
  target: OccurreneTarget;

  @Field(() => String, { description: 'Poster Title', nullable: true })
  targetId: string;

  @Field(() => String, { description: 'Actor', nullable: true })
  actor: string;

  @Field(() => String, { description: 'Poster description', nullable: true })
  description: string;
}
