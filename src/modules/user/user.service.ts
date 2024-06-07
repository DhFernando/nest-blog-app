import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { KNEX_CONNECTION } from 'src/constants/constants';

@Injectable()
export class UserService { 

  constructor(
    @Inject(KNEX_CONNECTION) private readonly knex,
  ) {
    User.knex(this.knex);
  }


  async create(createUserInput: CreateUserInput) { 
    return await User.query().insert(createUserInput)
    
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
