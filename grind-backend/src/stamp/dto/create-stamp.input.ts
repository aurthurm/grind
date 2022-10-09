import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStampInput {
  @Field(() => String, { description: 'Stamp title' })
  title: string;

  @Field(() => String, { description: 'Created By' })
  createdBy: string;

  @Field(() => String, { description: 'Updated By', nullable: true })
  updatedBy?: string;
}
