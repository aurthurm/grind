import { CreatePosterFlowInput } from './create-poster-flow.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePosterFlowInput extends PartialType(CreatePosterFlowInput) {
  @Field(() => Int)
  id: number;
}
