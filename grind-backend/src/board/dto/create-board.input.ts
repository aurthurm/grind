import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBoardInput {
  @Field(() => String, { description: 'Board Title' })
  title: string;

  @Field(() => String, { description: 'Board Description', nullable: true })
  description?: string;

  @Field(() => String, { description: 'Board Scheme', nullable: true })
  scheme?: string;

  @Field({ description: 'Created By', nullable: true })
  createdBy?: string;
}
