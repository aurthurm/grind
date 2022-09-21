import { CreateStampInput } from './create-stamp.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStampInput extends PartialType(CreateStampInput) {
  @Field(() => String)
  id: string;
}
