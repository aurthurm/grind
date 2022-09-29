import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { ObjectId, Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { ErrandCategory } from 'src/helpers/constants';
import { Poster } from 'src/poster/entities/poster.entity';
import { Stamp } from 'src/stamp/entities/stamp.entity';
import { User } from 'src/user/entities/user.entity';

export type ErrandDocument = Errand & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Errand {
  @Field(() => ID)
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Field(() => ErrandCategory, {
    description: 'Errand category',
    nullable: true,
  })
  @Prop({ type: String, enum: ErrandCategory })
  category?: ErrandCategory;

  @Field(() => String, { description: 'Errand Title', nullable: true })
  @Prop()
  title?: string;

  @Field(() => String, { description: 'Errand description', nullable: true })
  @Prop()
  description?: string;

  @Field(() => [Stamp], { description: 'Errand stamps', nullable: true })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Stamp.name }] })
  stamps?: Stamp[];

  @Field(() => String, { description: 'Errand status', nullable: true })
  @Prop()
  status?: string;

  @Field(() => String, { description: 'Errand priority', nullable: true })
  @Prop()
  priority?: string;

  @Field(() => Poster, { description: 'Errand Poster', nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Poster.name })
  poster?: Poster;

  @Field(() => User, { description: 'Created By', nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  createdBy?: User;

  @Field(() => User, { description: 'Reported By', nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  reporter?: User;

  @Field(() => User, { description: 'Assigned To', nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  assignee?: User;

  @Field(() => [User], { description: 'Errand Members', nullable: true })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }] })
  members?: User[];
}

export const ErrandSchema = SchemaFactory.createForClass(Errand);
