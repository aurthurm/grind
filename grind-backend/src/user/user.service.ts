import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  SALT_ROUNS = 10;

  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserInput | any) {
    const createAccount = new this.userModel(createUserDto);
    createAccount.pin = await bcrypt.hash(createAccount.pin, this.SALT_ROUNS);
    createAccount.password = await bcrypt.hash(
      createAccount.password,
      this.SALT_ROUNS,
    );
    return createAccount.save();
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOne(id: string, lean = false) {
    if (lean) {
      return await this.userModel.findById(id).lean();
    }
    return await this.userModel.findById(id);
  }

  async findOneBy(query = {}) {
    return await this.userModel.findOne(query);
  }

  async findByEmailOrUserName(payload: string) {
    return await this.userModel
      .findOne({
        $or: [{ userName: payload }, { email: payload }],
      })
      .lean();
  }

  async findByResetKey(resetKey: string) {
    return await this.userModel
      .findOne({
        $or: [{ resetPasswordKey: resetKey }, { resetPinKey: resetKey }],
      })
      .lean();
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const user = await this.userModel
      .findByIdAndUpdate(id, updateUserInput)
      .setOptions({ new: true });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndRemove(id);
  }
}
