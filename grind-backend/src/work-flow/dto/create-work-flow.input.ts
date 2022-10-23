import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkFlowInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
