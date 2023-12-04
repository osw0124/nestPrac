import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';

import { HealthController } from './health.controller';

@Module({
  imports: [TerminusModule, HttpModule], // gracefulShutdownTimeoutMs: 1000,
  controllers: [HealthController],
})
export class HealthModule {}
