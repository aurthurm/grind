import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { ObjectId, Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User, UserSchema } from 'src/user/entities/user.entity';

export type SchemeDocument = Scheme & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Scheme {
  @Field(() => ID)
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Field(() => String, { description: 'Scheme Title' })
  @Prop()
  title: string;

  @Field(() => String, { description: 'Scheme Description' })
  @Prop()
  description: string;

  @Field(() => User, { description: 'Created By' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  createdBy: User;

  @Field(() => User, { description: 'Updated By' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  updatedBy: User;

  @Field(() => [User], { description: 'Scheme Members' })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }] })
  members: User[];

  @Prop()
  @Field(() => Date, { description: 'Start Date', nullable: true })
  startDate?: Date;

  @Prop()
  @Field(() => Date, { description: 'End Date', nullable: true })
  endDate?: Date;

  @Prop()
  @Field(() => Date, { description: 'Created At' })
  createdAt?: Date;

  @Prop()
  @Field(() => Date, { description: 'Updated At' })
  updatedAt?: Date;
}

export const SchemeSchema = SchemaFactory.createForClass(Scheme);
