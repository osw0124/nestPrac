import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HealthModule } from './health/health.module';

@Module({
  imports: [
    AppModule,
    HealthModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'debug', 'prod').default('dev'),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
