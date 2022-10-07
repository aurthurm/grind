import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMilestoneInput {
  @Field(() => String, { description: 'Milestone Errand' })
  errand: string;

  @Field(() => String, { description: 'Milestone Title', nullable: true })
  title?: string;

  @Field(() => String, { description: 'Milestone Description', nullable: true })
  description?: string;

  @Field(() => Boolean, { description: 'Status', nullable: true })
  complete?: boolean;

  @Field(() => String, { description: 'Assigned to', nullable: true })
  assignee?: string;
}
