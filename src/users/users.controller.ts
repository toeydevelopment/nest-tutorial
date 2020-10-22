import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, ParsedBody } from '@nestjsx/crud';
import { CreateUserDto } from './dto/create-user-dto';
import { EUser } from './user.entity';
import { UsersService } from './users.service';

@ApiTags('User')
// @Crud({
//   model: {
//     type: EUser,
//   },
//   routes: {
//     createOneBase: {
//       decorators: [ParsedBody(CreateUserDto)],
//     },
//   },
// })
@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post('/')
  async createUser(@Body() body: CreateUserDto) {
    console.log(body);
  }
}
