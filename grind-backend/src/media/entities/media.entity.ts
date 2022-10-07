import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import * as mongoose from 'mongoose';
import { MediaTarget } from 'src/helpers/constants';
import { User } from 'src/user/entities/user.entity';

export type MediaDocument = Media & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Media {
  @Field(() => ID)
  @Transform(({ value }) => value.toString())
  _id: mongoose.ObjectId;

  @Field(() => MediaTarget, {
    description: 'Media target',
    nullable: true,
  })
  @Prop({ type: String, enum: MediaTarget, nullable: true })
  target: MediaTarget;

  @Field(() => String, { description: 'Media Target ID', nullable: true })
  @Prop({ type: String })
  targetId: string;

  @Field(() => String, {
    description: 'Media destination',
    nullable: true,
  })
  @Prop()
  destination: string;

  @Field(() => String, {
    description: 'Media encoding',
    nullable: true,
  })
  @Prop()
  encoding: string;

  @Field(() => String, {
    description: 'Media filename',
    nullable: true,
  })
  @Prop()
  filename: string;

  @Field(() => String, {
    description: 'Media mimetype',
    nullable: true,
  })
  @Prop()
  mimetype: string;

  @Field(() => String, {
    description: 'Media originalname',
    nullable: true,
  })
  @Prop()
  originalname: string;

  @Field(() => String, {
    description: 'Media path',
    nullable: true,
  })
  @Prop()
  path: string;

  @Field(() => String, {
    description: 'Media size',
    nullable: true,
  })
  @Prop()
  size: string;

  @Field(() => String, { description: 'Media description', nullable: true })
  @Prop()
  description: string;

  @Prop()
  @Field(() => Date, { description: 'Created At', nullable: true })
  createdAt?: Date;

  @Field(() => User, { description: 'Actor', nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  createdBy: User;

  @Prop()
  @Field(() => Date, { description: 'Updated At', nullable: true })
  updatedAt?: Date;
}

export const MediaSchema = SchemaFactory.createForClass(Media);
