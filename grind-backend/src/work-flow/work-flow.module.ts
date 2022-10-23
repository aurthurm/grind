import { Module } from '@nestjs/common';
import { WorkFlowService } from './work-flow.service';
import { WorkFlowResolver } from './work-flow.resolver';

@Module({
  providers: [WorkFlowResolver, WorkFlowService]
})
export class WorkFlowModule {}
