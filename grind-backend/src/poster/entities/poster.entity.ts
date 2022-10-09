import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { ObjectId, Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { PosterCategory } from 'src/helpers/constants';
import { Stamp } from 'src/stamp/entities/stamp.entity';
import { User } from 'src/user/entities/user.entity';

export type PosterDocument = Poster & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Poster {
  @Field(() => ID)
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Field(() => PosterCategory, { description: 'Poster category' })
  @Prop({ type: String, enum: PosterCategory })
  category: PosterCategory;

  @Field(() => String, { description: 'Poster Title' })
  @Prop()
  title: string;

  @Field(() => String, { description: 'Poster description' })
  @Prop()
  description: string;

  @Field(() => [Stamp], { description: 'Poster label' })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Stamp.name }] })
  stamps: Stamp[];

  @Field(() => User, { description: 'Created By' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  createdBy: User;

  @Field(() => User, { description: 'Updated By' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  updatedBy: User;

  @Field(() => User, { description: 'Assigned To' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  assignedTo: User;

  @Field(() => [User], { description: 'Poster Members' })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }] })
  members: User[];

  @Field(() => String, { description: 'Poster status' })
  @Prop()
  status: string;

  @Prop()
  @Field(() => Date, { description: 'Created At' })
  createdAt?: Date;

  @Prop()
  @Field(() => Date, { description: 'Updated At' })
  updatedAt?: Date;
}

export const PosterSchema = SchemaFactory.createForClass(Poster);
