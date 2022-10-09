import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { ObjectId, Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/entities/user.entity';

export type StampDocument = Stamp & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Stamp {
  @Field(() => ID)
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Field(() => String, { description: 'Stamp title' })
  @Prop()
  title: string;

  @Field(() => User, { description: 'Created By' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  createdBy: User;

  @Field(() => User, { description: 'Updated By' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  updatedBy: User;

  @Prop()
  @Field(() => Date, { description: 'Created At' })
  createdAt?: Date;

  @Prop()
  @Field(() => Date, { description: 'Updated At' })
  updatedAt?: Date;
}

export const StampSchema = SchemaFactory.createForClass(Stamp);
