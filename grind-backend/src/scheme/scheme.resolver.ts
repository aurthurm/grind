import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { SchemeService } from './scheme.service';
import { Scheme } from './entities/scheme.entity';
import { CreateSchemeInput } from './dto/create-scheme.input';
import { UpdateSchemeInput } from './dto/update-scheme.input';
import { GqlCurrentUser, GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { User } from 'src/user/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { BoardService } from 'src/board/board.service';

@Resolver(() => Scheme)
@UseGuards(GqlAuthGuard)
export class SchemeResolver {
  constructor(
    private readonly schemeService: SchemeService,
    private readonly boardsService: BoardService,
  ) {}

  @Mutation(() => Scheme)
  async createScheme(
    @Args('createSchemeInput') createSchemeInput: CreateSchemeInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.schemeService.create({
      ...createSchemeInput,
      createdBy: user._id?.toString(),
      updatedBy: user._id?.toString(),
    });
  }

  @Query(() => [Scheme], { name: 'schemes' })
  async findAll() {
    return await this.schemeService.findAll();
  }

  @Query(() => Scheme, { name: 'scheme' })
  async findOne(@Args('id', { type: () => String }) id: string) {
    return await this.schemeService.findOne(id);
  }

  @Mutation(() => Scheme)
  async updateScheme(
    @Args('updateSchemeInput') updateSchemeInput: UpdateSchemeInput,
    @GqlCurrentUser() user: User,
  ) {
    return await this.schemeService.update(updateSchemeInput.id, {
      ...updateSchemeInput,
      updatedBy: user._id?.toString(),
    });
  }

  @Mutation(() => Scheme)
  async removeScheme(@Args('id', { type: () => String }) id: string) {
    return await this.schemeService.remove(id);
  }

  @ResolveField()
  async boards(@Parent() scheme: Scheme) {
    const { _id } = scheme;
    return this.boardsService.query({ scheme: _id });
  }
}
