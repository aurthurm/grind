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

  @Field(() => Errand, { description: 'Milestone Errand', nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Errand.name })
  errand?: Errand;

  @Field(() => String, { description: 'Milestone Title', nullable: true })
  @Prop()
  title?: string;

  @Field(() => String, { description: 'Milestone Description', nullable: true })
  @Prop()
  description?: string;

  @Field(() => Boolean, { description: 'Milestone progress', nullable: true })
  @Prop()
  complete?: boolean;

  @Field(() => User, { description: 'Assigned to', nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  assignee?: User;

  @Field(() => User, { description: 'Created By', nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  createdBy?: User;

  @Prop()
  @Field(() => Date, { description: 'Created At', nullable: true })
  createdAt?: Date;

  @Prop()
  @Field(() => Date, { description: 'Updated At', nullable: true })
  updatedAt?: Date;
}

export const MilestoneSchema = SchemaFactory.createForClass(Milestone);
