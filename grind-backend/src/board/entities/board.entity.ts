import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { ObjectId, Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Scheme } from 'src/scheme/entities/scheme.entity';
import { User } from 'src/user/entities/user.entity';

export type BoardDocument = Board & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Board {
  @Field(() => ID)
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Field(() => String, { description: 'Board Title' })
  @Prop()
  title: string;

  @Field(() => String, { description: 'Board Description', nullable: true })
  @Prop()
  description?: string;

  @Field(() => Scheme, { description: 'Board Scheme', nullable: true })
  @Prop({ unique: false })
  scheme?: Scheme;

  @Field(() => User, { description: 'Created By', nullable: true })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    unique: false,
  })
  createdBy?: User;

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

export const BoardSchema = SchemaFactory.createForClass(Board);
