import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { GqlAuthGuard, GqlCurrentUser } from 'src/auth/gql-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => User)
@UseGuards(GqlAuthGuard)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.userService.create({
      ...createUserInput,
      createdBy: user._id?.toString(),
      updatedBy: user._id?.toString(),
    });
  }

  @Query(() => [User], { name: 'users' })
  async findAll() {
    return await this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args('id', { type: () => Int }) id: string) {
    return await this.userService.findOne(id);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.userService.update(updateUserInput.id, {
      ...updateUserInput,
      updatedBy: user._id?.toString(),
    });
  }

  @Mutation(() => User)
  async removeUser(@Args('id', { type: () => Int }) id: string) {
    return await this.userService.remove(id);
  }
}
