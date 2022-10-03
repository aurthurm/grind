import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { ObjectId } from 'mongoose';
import { OccurreneTarget } from 'src/helpers/constants';
import * as mongoose from 'mongoose';
import { User } from 'src/user/entities/user.entity';

export type OccurrenceDocument = Occurrence & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Occurrence {
  @Field(() => ID)
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Field(() => OccurreneTarget, {
    description: 'Poster category',
    nullable: true,
  })
  @Prop({ type: String, enum: OccurreneTarget, nullable: true })
  target: OccurreneTarget;

  @Field(() => String, { description: 'Poster Title', nullable: true })
  @Prop({ type: String })
  targetId: string;

  @Field(() => User, { description: 'Actor', nullable: true })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  actor: User;

  @Field(() => String, { description: 'Poster description', nullable: true })
  @Prop()
  description: string;

  @Prop()
  @Field(() => Date, { description: 'Created At' })
  createdAt?: Date;

  @Prop()
  @Field(() => Date, { description: 'Updated At' })
  updatedAt?: Date;
}

export const OccurrenceSchema = SchemaFactory.createForClass(Occurrence);
