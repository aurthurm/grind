import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { ObjectId, Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { PosterCategory } from 'src/helpers/constants';
import { Stamp } from 'src/stamp/entities/stamp.entity';
import { User } from 'src/user/entities/user.entity';
import { Errand } from 'src/errand/entities/errand.entity';
import { Board } from 'src/board/entities/board.entity';
import { PosterFlow } from 'src/poster-flow/entities/poster-flow.entity';

export type PosterDocument = Poster & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Poster {
  @Field(() => ID)
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Field(() => PosterCategory, {
    description: 'Poster category',
    nullable: true,
  })
  @Prop({ type: String, enum: PosterCategory })
  category: PosterCategory;

  @Field(() => String, { description: 'Poster Title', nullable: true })
  @Prop()
  title: string;

  @Field(() => String, { description: 'Poster description', nullable: true })
  @Prop()
  description: string;

  @Field(() => Board, { description: 'Poster Board', nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Board.name })
  board: Board;

  @Field(() => [Stamp], { description: 'Poster label', nullable: true })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Stamp.name }] })
  stamps: Stamp[];

  @Field(() => [PosterFlow], {
    description: 'Poster Work Flow',
    nullable: true,
  })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Stamp.name }] })
  workflow: PosterFlow[];

  @Field(() => User, { description: 'Created By', nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  createdBy: User;

  @Field(() => User, { description: 'Updated By', nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  updatedBy: User;

  @Field(() => User, { description: 'Assigned To', nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  assignee: User;

  @Field(() => [User], { description: 'Poster Members', nullable: true })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }] })
  members: User[];

  @Field(() => String, { description: 'Poster status', nullable: true })
  @Prop()
  status: string;

  @Field(() => [Errand], { nullable: 'itemsAndList' })
  errands: Errand[];

  @Prop()
  @Field(() => Date, { description: 'Created At', nullable: true })
  createdAt?: Date;

  @Prop()
  @Field(() => Date, { description: 'Updated At', nullable: true })
  updatedAt?: Date;
}

export const PosterSchema = SchemaFactory.createForClass(Poster);
