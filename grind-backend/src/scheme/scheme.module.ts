import { Module } from '@nestjs/common';
import { SchemeService } from './scheme.service';
import { SchemeResolver } from './scheme.resolver';
import { Scheme, SchemeSchema } from './entities/scheme.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardModule } from 'src/board/board.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Scheme.name, schema: SchemeSchema }]),
    BoardModule,
  ],
  providers: [SchemeResolver, SchemeService],
})
export class SchemeModule {}
