import { CreatePosterInput } from './create-poster.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePosterInput extends PartialType(CreatePosterInput) {
  @Field(() => String)
  id: string;
}
