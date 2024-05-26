/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {
  constructor(private readonly test: UsersService) {}
  getHello(): string {
    return this.test.test();
  }
}
