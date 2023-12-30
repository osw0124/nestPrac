import { Body, Controller, Get, Post } from '@nestjs/common';

import { WaitService } from './wait.service';
import { CheckWaitDto } from './wait.dto';

@Controller('wait')
export class WaitController {
  constructor(private readonly waitService: WaitService) {}

  @Post()
  createWait() {
    return this.waitService.createWait();
  }
  @Get()
  checkWait(@Body() body: CheckWaitDto): Promise<number> {
    const { token } = body;
    return this.waitService.checkWait(token);
  }
}
