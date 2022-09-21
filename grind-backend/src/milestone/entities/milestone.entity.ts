import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { ObjectId, Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Errand } from 'src/errand/entities/errand.entity';
import { User } from 'src/user/entities/user.entity';

export type MilestoneDocument = Milestone & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Milestone {
  @Field(() => ID)
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Field(() => Errand, { description: 'Milestone Errand' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Errand.name })
  errand: Errand;

  @Field(() => String, { description: 'Milestone Title' })
  @Prop()
  title: string;

  @Field(() => String, { description: 'Milestone Description' })
  @Prop()
  description: string;

  @Field(() => User, { description: 'Created By' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  createdBy: User;
}

export const MilestoneSchema = SchemaFactory.createForClass(Milestone);
