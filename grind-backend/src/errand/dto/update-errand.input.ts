import { CreateErrandInput } from './create-errand.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateErrandInput extends PartialType(CreateErrandInput) {
  @Field(() => String)
  id: string;
}
