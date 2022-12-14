import { Module } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityResolver } from './community.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Community, CommunitySchema } from './entities/community.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Community.name, schema: CommunitySchema },
    ]),
  ],
  providers: [CommunityResolver, CommunityService],
})
export class CommunityModule {}
