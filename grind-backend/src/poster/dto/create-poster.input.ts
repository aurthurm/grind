import { InputType, Field } from '@nestjs/graphql';
import { PosterCategory } from 'src/helpers/constants';

@InputType()
export class CreatePosterInput {
  @Field(() => PosterCategory, { description: 'Poster category' })
  category: PosterCategory;

  @Field(() => String, { description: 'Poster Title' })
  title: string;

  @Field(() => String, { description: 'Poster description' })
  description: string;

  @Field(() => String, { description: 'Poster label' })
  stamps: string[];

  @Field(() => String, { description: 'Created By' })
  createdBy: string;

  @Field(() => String, { description: 'Assigned To' })
  assignedTo: string;

  @Field(() => [String], { description: 'Poster Members' })
  members: string[];

  @Field(() => String, { description: 'Poster status' })
  status: string;

  @Field(() => [String], { description: 'Poster Communities' })
  communities: string[];
}
