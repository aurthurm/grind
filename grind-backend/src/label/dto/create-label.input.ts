import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLabelInput {
  @Field(() => String, { description: 'Label title' })
  title: string;

  @Field(() => String, { description: 'Label category' })
  category: string;

  @Field(() => String, { description: 'Created By', nullable: true })
  createdBy: string;

  @Field(() => String, { description: 'Updated By', nullable: true })
  updatedBy?: string;
}
