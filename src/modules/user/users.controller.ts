import { Controller, Get } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersService } from './user.service';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/user')
  async getAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
