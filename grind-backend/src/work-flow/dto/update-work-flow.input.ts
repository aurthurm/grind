import { CreateWorkFlowInput } from './create-work-flow.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWorkFlowInput extends PartialType(CreateWorkFlowInput) {
  @Field(() => Int)
  id: number;
}
