import { Module } from '@nestjs/common';
import { PosterService } from './poster.service';
import { PosterResolver } from './poster.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Poster, PosterSchema } from './entities/poster.entity';
import { ErrandModule } from 'src/errand/errand.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Poster.name, schema: PosterSchema }]),
    ErrandModule,
  ],
  providers: [PosterResolver, PosterService],
})
export class PosterModule {}
