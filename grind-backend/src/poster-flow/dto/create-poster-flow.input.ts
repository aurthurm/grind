import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePosterFlowInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
