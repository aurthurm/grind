import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMilestoneInput {
  @Field(() => String, { description: 'Milestone Errand' })
  errand: string;

  @Field(() => String, { description: 'Milestone Title' })
  title: string;

  @Field(() => String, { description: 'Milestone Description' })
  description: string;

  @Field(() => String, { description: 'Created By' })
  createdBy: string;
}
