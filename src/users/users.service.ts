import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { EUser } from './user.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<EUser> {
  constructor(@InjectRepository(EUser) repo) {
    super(repo);
  }
}
