import { InputType, Field } from '@nestjs/graphql';
import { UserRole } from 'src/helpers/constants';

@InputType()
export class CreateUserInput {
  @Field()
  email: string;

  @Field()
  pin: string;

  @Field()
  password: string;

  @Field()
  resetPinKey: string;

  @Field()
  requirePinChange: boolean;

  @Field()
  resetPasswordKey: string;

  @Field()
  requirePasswordChange: boolean;

  @Field()
  phone: string;

  @Field()
  firstName: string;

  @Field()
  middleName: string;

  @Field()
  lastName: string;

  @Field()
  userName: string;

  @Field()
  name: string;

  @Field()
  lastLogin: Date;

  @Field()
  lastPasswordReset: Date;

  @Field(() => [UserRole])
  roles: UserRole[];

  @Field()
  status: string;

  @Field()
  address: string;

  @Field()
  createdBy: string;

  @Field()
  completeness: number;
}
