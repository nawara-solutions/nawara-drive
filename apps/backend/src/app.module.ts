import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DriveModule } from './drive/drive.module.js';

@Module({
  imports: [DriveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
