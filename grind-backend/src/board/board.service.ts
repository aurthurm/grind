import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';
import { Board, BoardDocument } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectModel(Board.name)
    private boardModel: Model<BoardDocument>,
  ) {}

  async create(createBoardInput: CreateBoardInput) {
    let board = new this.boardModel(createBoardInput);
    board = await board.save();
    return this.findOne(board._id);
  }

  async findAll() {
    return await this.boardModel.find().populate('scheme').exec();
  }

  async findOne(id: string) {
    return await this.boardModel.findById(id).populate('scheme').exec();
  }

  async update(id: string, updateBoardInput: UpdateBoardInput) {
    const board = await this.boardModel
      .findByIdAndUpdate(id, updateBoardInput)
      .setOptions({ new: true })
      .populate('scheme')
      .exec();
    if (!board) {
      throw new NotFoundException();
    }
    return board;
  }

  async remove(id: string) {
    return await this.boardModel.findByIdAndRemove(id);
  }
}
