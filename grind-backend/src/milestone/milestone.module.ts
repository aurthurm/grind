import { Module } from '@nestjs/common';
import { MilestoneService } from './milestone.service';
import { MilestoneResolver } from './milestone.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Milestone, MilestoneSchema } from './entities/milestone.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Milestone.name, schema: MilestoneSchema },
    ]),
  ],
  providers: [MilestoneResolver, MilestoneService],
  exports: [MilestoneService],
})
export class MilestoneModule {}
