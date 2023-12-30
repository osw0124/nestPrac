import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { Seat } from './seat.entity';
import { Wait } from 'src/wait/wait.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seat, Wait])],
  providers: [BookingService],
  controllers: [BookingController],
})
export class BookingModule {}
