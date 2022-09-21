import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDiscussionInput {
  @Field(() => String, { description: 'Discusion Errand' })
  errand: string;

  @Field(() => String, { description: 'Discusion Body' })
  content: string;

  @Field(() => String, { description: 'Discusion By', nullable: true })
  createdBy?: string;
}
