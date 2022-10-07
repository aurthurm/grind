import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMediaInput {
  @Field(() => String, { description: 'Media target', nullable: true })
  target: string;

  @Field(() => String, { description: 'Media Target ID', nullable: true })
  targetId: string;

  @Field(() => String, {
    description: 'Media destination',
    nullable: true,
  })
  destination: string;

  @Field(() => String, {
    description: 'Media encoding',
    nullable: true,
  })
  encoding: string;

  @Field(() => String, {
    description: 'Media filename',
    nullable: true,
  })
  filename: string;

  @Field(() => String, {
    description: 'Media mimetype',
    nullable: true,
  })
  mimetype: string;

  @Field(() => String, {
    description: 'Media originalname',
    nullable: true,
  })
  originalname: string;

  @Field(() => String, {
    description: 'Media path',
    nullable: true,
  })
  path: string;

  @Field(() => String, {
    description: 'Media size',
    nullable: true,
  })
  size: string;

  @Field(() => String, { description: 'Media description', nullable: true })
  description: string;

  @Field(() => String, { description: 'Uploaded By', nullable: true })
  createdBy: string;
}
