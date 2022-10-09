import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSchemeInput {
  @Field(() => String, { description: 'Scheme Title' })
  title: string;

  @Field(() => String, { description: 'Scheme Description' })
  description: string;

  @Field(() => [String], { description: 'Scheme Boards' })
  boards: string[];

  @Field(() => String, { description: 'Created By' })
  createdBy: string;

  @Field(() => String, { description: 'Updated By' })
  updatedBy?: string;

  @Field(() => [String], { description: 'Scheme Members' })
  members: string[];

  @Field(() => Date, { description: 'Start Date', nullable: true })
  startDate?: Date;

  @Field(() => Date, { description: 'End Date', nullable: true })
  endDate?: Date;
}
