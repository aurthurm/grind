import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStampInput {
  @Field(() => String, { description: 'Stamp title' })
  title: string;

  @Field(() => String, { description: 'Created By' })
  createdBy: string;
}
