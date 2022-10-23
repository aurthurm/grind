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

  @Field(() => String, { nullable: true })
  @Prop({
    unique: true,
  })
  userName: string;

  @Field(() => String, { nullable: true })
  @Prop()
  firstName: string;

  @Field(() => String, { nullable: true })
  @Prop()
  middleName: string;

  @Field(() => String, { nullable: true })
  @Prop()
  lastName: string;

  @Field(() => String, { nullable: true })
  @Prop()
  name: string;

  @Field(() => String, { nullable: true })
  @Prop({
    unique: true,
  })
  email: string;

  @Field(() => [UserRole], { nullable: true })
  @Prop({
    index: true,
    type: [{ type: String, enum: UserRole }],
  })
  roles: UserRole[];

  @Exclude()
  @Field(() => String, { nullable: true })
  @Prop()
  hashed_password: string;

  @Exclude()
  @Field(() => String, { nullable: true })
  @Prop()
  pin: string;

  @Exclude()
  @Field(() => String, { nullable: true })
  @Prop()
  resetPinKey: string;

  @Field(() => String, { nullable: true })
  @Prop({
    default: true,
  })
  requirePinChange: boolean;

  @Exclude()
  @Field(() => String, { nullable: true })
  @Prop()
  password: string;

  @Field(() => String, { nullable: true })
  @Prop()
  resetPasswordKey: string;

  @Field(() => String, { nullable: true })
  @Prop({
    default: true,
  })
  requirePasswordChange: boolean;

  @Field(() => String, { nullable: true })
  @Prop({
    unique: true,
    nullable: true,
  })
  phone: string;

  @Field(() => String, { nullable: true })
  @Prop()
  lastLogin: Date;

  @Field()
  @Prop()
  lastPasswordReset: Date;

  @Prop({
    min: 1,
    max: 100,
  })
  @Field(() => String, { nullable: true })
  completeness: number;

  @Field(() => String, { nullable: true })
  @Prop()
  status: string;

  @Field(() => String, { nullable: true })
  @Prop()
  is_active: boolean;

  @Field(() => String, { nullable: true })
  @Prop()
  is_superuser: boolean;

  @Prop()
  @Field(() => String, { nullable: true })
  createdBy: string;

  @Field(() => String, { nullable: true })
  @Prop()
  updatedBy?: string;

  @Prop()
  @Field(() => Date, { description: 'Created At' })
  createdAt?: Date;

  @Prop()
  @Field(() => Date, { description: 'Updated At' })
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
