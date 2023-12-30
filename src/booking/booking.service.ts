import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, Repository } from 'typeorm';

import { Seat } from './seat.entity';
import { Token } from 'src/wait/wait.type';
import { Wait } from 'src/wait/wait.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Seat)
    private readonly seatRepo: Repository<Seat>,
    @InjectRepository(Wait)
    private readonly waitRepo: Repository<Wait>,
  ) {}

  async createBooking(token: Token) {
    const { id, status, createAt, expireAt } = token;
    await this.waitRepo.update({ id }, { status: 'work' });
    // const token = await this.waitRepo.save({ status: 'wait' });
    // const count = await this.waitRepo.count({
    //   where: { status: 'wait', createAt: LessThan(token.createAt) },
    // });
    // return { ...token, count };
  }
}
