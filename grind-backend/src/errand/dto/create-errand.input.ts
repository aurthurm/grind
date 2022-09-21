import { InputType, Int, Field } from '@nestjs/graphql';
import { ErrandCategory } from 'src/helpers/constants';

@InputType()
export class CreateErrandInput {
  @Field(() => ErrandCategory, {
    description: 'Errand category',
    nullable: true,
  })
  category?: ErrandCategory;

  @Field(() => String, { description: 'Errand Title' })
  title: string;

  @Field(() => String, { description: 'Errand description', nullable: true })
  description?: string;

  @Field(() => [String], { description: 'Errand Milestone', nullable: true })
  milestones?: string[];

  @Field(() => String, { description: 'Created By', nullable: true })
  createdBy?: string;

  @Field(() => String, { description: 'Assigned To', nullable: true })
  assignedTo?: string;

  @Field(() => String, { description: 'Errand status', nullable: true })
  status?: string;

  @Field(() => String, { description: 'Errand Poster', nullable: true })
  poster?: string;
}
