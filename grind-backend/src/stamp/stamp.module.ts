import { Module } from '@nestjs/common';
import { StampService } from './stamp.service';
import { StampResolver } from './stamp.resolver';
import { Stamp, StampSchema } from './entities/stamp.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Stamp.name, schema: StampSchema }]),
  ],
  providers: [StampResolver, StampService],
  exports: [StampService],
})
export class StampModule {}
