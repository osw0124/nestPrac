import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wait } from './wait.entity';
import { WaitService } from './wait.service';
import { WaitController } from './wait.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Wait])],
  providers: [WaitService],
  controllers: [WaitController],
})
export class WaitModule {}
