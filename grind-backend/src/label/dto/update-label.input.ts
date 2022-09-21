import { CreateLabelInput } from './create-label.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLabelInput extends PartialType(CreateLabelInput) {
  @Field(() => String)
  id: string;
}
