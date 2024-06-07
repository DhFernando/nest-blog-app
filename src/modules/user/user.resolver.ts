import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service'; 
import { CreateUserInput } from './dto/create-user.input'; 
import { UserObject } from './dto/user.object';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => UserObject)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserObject)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [UserObject], { name: 'user' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => UserObject, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => UserObject)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => UserObject)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
