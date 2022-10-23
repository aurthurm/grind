import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { ObjectId, Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { WorkFlowTarget } from 'src/helpers/constants';
import { User } from 'src/user/entities/user.entity';

export type WorkFlowDocument = WorkFlow & Document;

@ObjectType()
@Schema({ timestamps: true })
export class WorkFlow {
  @Field(() => ID)
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Field(() => WorkFlowTarget, {
    description: 'WorkFlow category',
    nullable: true,
  })
  @Prop({ type: String, enum: WorkFlowTarget })
  target: WorkFlowTarget;

  @Field(() => String, { description: 'WorkFlow Title', nullable: true })
  @Prop()
  title: string;

  @Field(() => String, { description: 'WorkFlow description', nullable: true })
  @Prop()
  description: string;

  @Field(() => String, { description: 'WorkFlow status', nullable: true })
  @Prop()
  status: string;

  @Prop()
  @Field(() => Date, { description: 'Created At', nullable: true })
  createdAt?: Date;

  @Field(() => User, { description: 'Created By', nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  createdBy: User;

  @Prop()
  @Field(() => Date, { description: 'Updated At', nullable: true })
  updatedAt?: Date;

  @Field(() => User, { description: 'Updated By', nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  updatedBy: User;
}

export const WorkFlowSchema = SchemaFactory.createForClass(WorkFlow);
