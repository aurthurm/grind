import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCommunityInput {
  @Field(() => String, { description: 'Community Title' })
  title: string;

  @Field(() => String, { description: 'Community Description' })
  description: string;

  @Field(() => String, { description: 'Community Creator' })
  createdBy: string;
}
