import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLabelInput {
  @Field(() => String, { description: 'Label title' })
  title: string;

  @Field(() => String, { description: 'Created By' })
  createdBy: string;
}
