import { Injectable, Logger } from '@nestjs/common';
import { SUPER_USER } from 'src/helpers/super_user';
import { UserService } from 'src/user/user.service';
import { faker } from '@faker-js/faker';
import { UserRole } from 'src/helpers/constants';

@Injectable()
export class AppInitService {
  constructor(private readonly userService: UserService) {}

  public initialize() {
    Logger.log('App Initialiser');
    this.createSuperUser();
    this.createTestUsers();
    Logger.log('App Initialiser complete');
  }

  private async createSuperUser(): Promise<void> {
    const exists = await this.userService.findOneBy({
      userName: SUPER_USER.userName,
    });
    if (exists) return;
    await this.userService.create({ ...SUPER_USER });
  }

  private _randUser() {
    const _fn = faker.name.firstName();
    const _ln = faker.name.lastName();
    return {
      userName: _fn.toLowerCase(),
      email: faker.internet.email(),
      firstName: _fn,
      lastName: _ln,
      middleName: '',
      name: _ln + ' ' + _ln,
      status: 'active',
      roles: faker.helpers.arrayElement([UserRole.USER]),
      pin: '0000',
      phone: faker.phone.number(),
      password: _fn.toLowerCase(),
      address: '',
      requirePinChange: true,
      requirePasswordChange: true,
    };
  }

  private async createTestUsers(): Promise<void> {
    const exists = await this.userService.findAll();
    if (exists.length > 2) return;
    [...Array(10).keys()].forEach(async () => {
      await this.userService.create({ ...this._randUser() });
    });
  }
}
