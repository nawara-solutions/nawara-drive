import { Controller, Get } from '@nestjs/common';
import { DriveService } from './drive.service.js';

@Controller('drive')
export class DriveController {
  constructor(private readonly driveService: DriveService) {}

  @Get('hello-desktop')
  getHelloDesktop(): string {
    return this.driveService.getHelloDesktop();
  }
}
