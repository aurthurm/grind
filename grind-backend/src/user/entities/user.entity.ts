import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { ObjectId , Document } from 'mongoose';
import { UserRole } from 'src/helpers/constants';

export type UserDocument = User & Document;

@ObjectType()
@Schema({ timestamps: true })
export class User {
  @Field(() => ID)
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Field()
  @Prop()
  firstName: string;

  @Field()
  @Prop()
  middleName: string;

  @Field()
  @Prop()
  lastName: string;

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  email: string;

  @Field(() => UserRole)
  @Prop({
    index: true,
    type: [{ type: String, enum: UserRole }],
  })
  roles: UserRole[];

  @Field()
  @Prop()
  hashed_password: string;

  @Field()
  @Prop()
  pin: string;

  @Field()
  @Prop()
  resetPinKey: string;

  @Field()
  @Prop({
    default: true,
  })
  requirePinChange: boolean;

  @Field()
  @Prop()
  password: string;

  @Field()
  @Prop()
  resetPasswordKey: string;

  @Field()
  @Prop({
    default: true,
  })
  requirePasswordChange: boolean;

  @Field()
  @Prop({
    unique: true,
  })
  phone: string;

  @Field()
  @Prop()
  lastLogin: Date;

  @Field()
  @Prop()
  lastPasswordReset: Date;

  @Prop({
    min: 1,
    max: 100,
  })
  completeness: number;

  @Field()
  @Prop()
  status: string;

  @Field()
  @Prop()
  is_active: boolean;

  @Field()
  @Prop()
  is_superuser: boolean;

  @Prop()
  createdBy: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
