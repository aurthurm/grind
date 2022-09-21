import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { ObjectId , Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Errand } from 'src/errand/entities/errand.entity';
import { User } from 'src/user/entities/user.entity';

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

  @Field(() => User, { description: 'Created By' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  createdBy: User;
}

export const LabelSchema = SchemaFactory.createForClass(Label);
