import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';

@Resolver(() => Board)
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Mutation(() => Board)
  async createBoard(
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ) {
    return await this.boardService.create(createBoardInput);
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
  ) {
    return await this.boardService.update(
      updateBoardInput.id,
      updateBoardInput,
    );
  }

  @Mutation(() => Board)
  async removeBoard(@Args('id', { type: () => Int }) id: string) {
    return await this.boardService.remove(id);
  }
}
