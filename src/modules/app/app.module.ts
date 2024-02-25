import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import * as dotenv from 'dotenv';

import { TasksService } from '../../common/crons/cron.runner';
import configuration from '../../configs/configs';
import { CarsModule } from '../cars/cars.module';
import { CustomEmailModule } from '../email/email-module';
import { PostgresModule } from '../postgress/postgres.module';
import { UserModule } from '../user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

dotenv.config({ path: 'environments/local.env' });

@Module({
  imports: [
    CustomEmailModule,
    PostgresModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    UserModule,
    ScheduleModule.forRoot(),
    CarsModule,
  ],
  controllers: [AppController],
  providers: [AppService, TasksService],
})
export class AppModule {}
