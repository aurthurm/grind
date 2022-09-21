import { CreateMilestoneInput } from './create-milestone.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMilestoneInput extends PartialType(CreateMilestoneInput) {
  @Field(() => String)
  id: string;
}
