import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';
import { GqlAuthGuard, GqlCurrentUser } from 'src/auth/gql-auth.guard';
import { User } from 'src/user/entities/user.entity';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Board)
@UseGuards(GqlAuthGuard)
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Mutation(() => Board)
  async createBoard(
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.boardService.create({
      ...createBoardInput,
      createdBy: user._id?.toString(),
      updatedBy: user._id?.toString(),
    });
  }

  @Query(() => [Board], { name: 'boards' })
  async findAll() {
    return await this.boardService.findAll();
  }

  @Query(() => Board, { name: 'board' })
  async findOne(@Args('id', { type: () => Int }) id: string) {
    return await this.boardService.findOne(id);
  }

  @Mutation(() => Board)
  async updateBoard(
    @Args('updateBoardInput') updateBoardInput: UpdateBoardInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.boardService.update(updateBoardInput.id, {
      ...updateBoardInput,
      updatedBy: user._id?.toString(),
    });
  }

  @Mutation(() => Board)
  async removeBoard(@Args('id', { type: () => Int }) id: string) {
    return await this.boardService.remove(id);
  }
}
