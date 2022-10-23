import { Module } from '@nestjs/common';
import { ErrandService } from './errand.service';
import { ErrandResolver } from './errand.resolver';
import { Errand, ErrandSchema } from './entities/errand.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { OccurrenceModule } from 'src/occurrence/occurrence.module';
import { MilestoneModule } from 'src/milestone/milestone.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Errand.name, schema: ErrandSchema }]),
    OccurrenceModule,
    MilestoneModule,
  ],
  providers: [ErrandResolver, ErrandService],
  exports: [ErrandService],
})
export class ErrandModule {}
