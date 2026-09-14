import { Injectable } from '@nestjs/common';

@Injectable()
export class DriveService {
  getHelloAdmin(): string {
    return 'hello admin';
  }
}
