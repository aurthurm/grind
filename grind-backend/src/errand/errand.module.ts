import { Module } from '@nestjs/common';
import { ErrandService } from './errand.service';
import { ErrandResolver } from './errand.resolver';
import { Errand, ErrandSchema } from './entities/errand.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { OccurrenceModule } from 'src/occurrence/occurrence.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Errand.name, schema: ErrandSchema }]),
    OccurrenceModule,
  ],
  providers: [ErrandResolver, ErrandService],
})
export class ErrandModule {}
