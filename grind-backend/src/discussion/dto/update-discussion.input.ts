import { CreateDiscussionInput } from './create-discussion.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDiscussionInput extends PartialType(CreateDiscussionInput) {
  @Field(() => String)
  id: string;
}
