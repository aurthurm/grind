import { InputType, Field } from '@nestjs/graphql';
import { PosterCategory } from 'src/helpers/constants';

@InputType()
export class CreatePosterInput {
  @Field(() => PosterCategory, {
    description: 'Poster category',
    nullable: true,
  })
  category: PosterCategory;

  @Field(() => String, { description: 'Poster Title', nullable: true })
  title: string;

  @Field(() => String, { description: 'Poster description', nullable: true })
  description: string;

  @Field(() => String, { description: 'Poster Board', nullable: true })
  board: string;

  @Field(() => String, { description: 'Poster label', nullable: true })
  stamps: string[];

  @Field(() => String, { description: 'Created By', nullable: true })
  createdBy: string;

  @Field(() => String, { description: 'Updated By', nullable: true })
  updatedBy?: string;

  @Field(() => String, { description: 'Assigned To', nullable: true })
  assignee: string;

  @Field(() => [String], { description: 'Poster Members', nullable: true })
  members: string[];

  @Field(() => String, { description: 'Poster status', nullable: true })
  status: string;

  @Field(() => [String], { description: 'Poster Communities', nullable: true })
  communities: string[];
}
