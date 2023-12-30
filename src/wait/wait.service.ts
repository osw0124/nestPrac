import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, Repository } from 'typeorm';

import { Wait } from './wait.entity';
import { Token } from './wait.type';

@Injectable()
export class WaitService {
  constructor(
    @InjectRepository(Wait)
    private readonly waitRepo: Repository<Wait>,
  ) {}

  async createWait() {
    const token = await this.waitRepo.save({ status: 'wait' });
    const count = await this.waitRepo.count({
      where: { status: 'wait', createAt: LessThan(token.createAt) },
    });
    return { ...token, count };
  }

  async checkWait(token: Token) {
    const count = await this.waitRepo.count({
      where: { status: 'wait', createAt: LessThan(token.createAt) },
    });
    return count;
  }
}
