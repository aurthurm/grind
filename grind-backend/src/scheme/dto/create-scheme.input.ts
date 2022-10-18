import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSchemeInput {
  @Field(() => String, { description: 'Scheme Title' })
  title: string;

  @Field(() => String, { description: 'Scheme Description', nullable: true })
  description: string;

  @Field(() => String, { description: 'Assigned ti', nullable: true })
  assignee?: string;

  @Field(() => [String], { description: 'Scheme Members', nullable: true })
  members: string[];

  @Field(() => Date, { description: 'Start Date', nullable: true })
  startDate?: Date;

  @Field(() => Date, { description: 'End Date', nullable: true })
  endDate?: Date;

  @Field(() => String, { description: 'Created By', nullable: true })
  createdBy: string;

  @Field(() => String, { description: 'Updated By', nullable: true })
  updatedBy?: string;
}
