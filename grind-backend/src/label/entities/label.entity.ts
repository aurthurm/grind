import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { ObjectId, Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import { LabelCategory } from 'src/helpers/constants';

export type LabelDocument = Label & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Label {
  @Field(() => ID)
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Field(() => String, { description: 'Label title' })
  @Prop()
  title: string;

  @Field(() => LabelCategory, {
    description: 'Label category',
    nullable: true,
  })
  @Prop({ type: String, enum: LabelCategory })
  category?: LabelCategory;

  @Field(() => User, { description: 'Created By', nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  createdBy: User;

  @Field(() => User, { description: 'Updated By', nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  updatedBy: User;

  @Prop()
  @Field(() => Date, { description: 'Created At', nullable: true })
  createdAt?: Date;

  @Prop()
  @Field(() => Date, { description: 'Updated At', nullable: true })
  updatedAt?: Date;
}

export const LabelSchema = SchemaFactory.createForClass(Label);
