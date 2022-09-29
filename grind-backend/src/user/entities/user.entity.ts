import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform, Exclude } from 'class-transformer';
import { ObjectId, Document } from 'mongoose';
import { UserRole } from 'src/helpers/constants';

export type UserDocument = User & Document;

@ObjectType()
@Schema({ timestamps: true })
export class User {
  @Field(() => ID)
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Field({ nullable: true })
  @Prop()
  userName: string;

  @Field({ nullable: true })
  @Prop()
  firstName: string;

  @Field({ nullable: true })
  @Prop()
  middleName: string;

  @Field({ nullable: true })
  @Prop()
  lastName: string;

  @Field({ nullable: true })
  @Prop()
  name: string;

  @Field({ nullable: true })
  @Prop()
  email: string;

  @Field(() => [UserRole], { nullable: true })
  @Prop({
    index: true,
    type: [{ type: String, enum: UserRole }],
  })
  roles: UserRole[];

  @Exclude()
  @Field({ nullable: true })
  @Prop()
  hashed_password: string;

  @Exclude()
  @Field({ nullable: true })
  @Prop()
  pin: string;

  @Exclude()
  @Field({ nullable: true })
  @Prop()
  resetPinKey: string;

  @Field({ nullable: true })
  @Prop({
    default: true,
  })
  requirePinChange: boolean;

  @Exclude()
  @Field({ nullable: true })
  @Prop()
  password: string;

  @Field({ nullable: true })
  @Prop()
  resetPasswordKey: string;

  @Field({ nullable: true })
  @Prop({
    default: true,
  })
  requirePasswordChange: boolean;

  @Field({ nullable: true })
  @Prop({
    unique: true,
  })
  phone: string;

  @Field({ nullable: true })
  @Prop()
  lastLogin: Date;

  @Field()
  @Prop()
  lastPasswordReset: Date;

  @Prop({
    min: 1,
    max: 100,
  })
  @Field({ nullable: true })
  completeness: number;

  @Field({ nullable: true })
  @Prop()
  status: string;

  @Field({ nullable: true })
  @Prop()
  is_active: boolean;

  @Field({ nullable: true })
  @Prop()
  is_superuser: boolean;

  @Prop()
  @Field({ nullable: true })
  createdBy: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
