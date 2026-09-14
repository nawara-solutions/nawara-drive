import { Injectable } from '@nestjs/common';

@Injectable()
export class DriveService {
  getHelloDesktop(): string {
    return 'hello desktop';
  }
}
