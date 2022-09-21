import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { ObjectId, Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Errand } from 'src/errand/entities/errand.entity';
import { User } from 'src/user/entities/user.entity';

export type DiscussionDocument = Discussion & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Discussion {
  @Field(() => ID)
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Field(() => String, { description: 'Discusion Body' })
  @Prop()
  content: string;

  @Field(() => Errand, { description: 'Discusion Errand' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Errand.name })
  errand: Errand;

  @Field(() => User, { description: 'Discusion By', nullable: true })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
  })
  createdBy?: User;

  @Prop()
  @Field(() => Date, { description: 'Created At' })
  createdAt?: Date;

  @Prop()
  @Field(() => Date, { description: 'Updated At' })
  updatedAt?: Date;
}

export const DiscussionSchema = SchemaFactory.createForClass(Discussion);
