import { CreateSchemeInput } from './create-scheme.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSchemeInput extends PartialType(CreateSchemeInput) {
  @Field(() => String)
  id: string;
}
