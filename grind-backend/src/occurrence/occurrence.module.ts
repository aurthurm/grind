import { Module } from '@nestjs/common';
import { OccurrenceService } from './occurrence.service';
import { OccurrenceResolver } from './occurrence.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Occurrence, OccurrenceSchema } from './entities/occurrence.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Occurrence.name, schema: OccurrenceSchema },
    ]),
  ],
  providers: [OccurrenceResolver, OccurrenceService],
  exports: [OccurrenceService],
})
export class OccurrenceModule {}
