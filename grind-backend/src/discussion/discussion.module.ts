import { Module } from '@nestjs/common';
import { DiscussionService } from './discussion.service';
import { DiscussionResolver } from './discussion.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Discussion, DiscussionSchema } from './entities/discussion.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Discussion.name, schema: DiscussionSchema },
    ]),
  ],
  providers: [DiscussionResolver, DiscussionService],
})
export class DiscussionModule {}
