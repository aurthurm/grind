import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { ObjectId, Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Errand, ErrandSchema } from 'src/errand/entities/errand.entity';
import { User } from 'src/user/entities/user.entity';

export type CommunityDocument = Community & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Community {
  @Field(() => ID)
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Field(() => String, { description: 'Community Title' })
  @Prop()
  title: string;

  @Field(() => String, { description: 'Community Description' })
  @Prop()
  description: string;

  @Field(() => [Errand], { description: 'Community Errands' })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Errand.name }] })
  errands: Errand[];

  @Field(() => User, { description: 'Community Creator' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  createdBy: User;

  @Field(() => User, { description: 'Updated By' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  updatedBy: User;

  @Field(() => [User], { description: 'Community Members' })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }] })
  members: User[];

  @Prop()
  @Field(() => Date, { description: 'Created At' })
  createdAt?: Date;

  @Prop()
  @Field(() => Date, { description: 'Updated At' })
  updatedAt?: Date;
}

export const CommunitySchema = SchemaFactory.createForClass(Community);
