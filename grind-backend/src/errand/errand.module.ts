import { Module } from '@nestjs/common';
import { ErrandService } from './errand.service';
import { ErrandResolver } from './errand.resolver';
import { Errand, ErrandSchema } from './entities/errand.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Errand.name, schema: ErrandSchema }]),
  ],
  providers: [ErrandResolver, ErrandService],
})
export class ErrandModule {}
