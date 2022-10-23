import { Injectable, Logger } from '@nestjs/common';
import { SUPER_USER } from 'src/helpers/super_user';
import { UserService } from 'src/user/user.service';
import { faker } from '@faker-js/faker';
import { LabelCategory, StampCategory, UserRole } from 'src/helpers/constants';
import { LabelService } from 'src/label/label.service';
import { StampService } from 'src/stamp/stamp.service';
import { CreateLabelInput } from 'src/label/dto/create-label.input';

@Injectable()
export class AppInitService {
  constructor(
    private readonly userService: UserService,
    private readonly labelService: LabelService,
    private readonly stampService: StampService,
  ) {}

  public initialize() {
    Logger.log('App Initialiser');
    this.createSuperUser();
    this.createTestUsers();
    this.addDefaultLabels();
    this.addDefaultStamps();
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

  private async addDefaultLabels(): Promise<void> {
    const hasSome = await this.labelService.findAll();
    if (hasSome.length === 0) {
      const defaults = [
        { title: 'Open', category: LabelCategory.TICKET },
        { title: 'In Progress', category: LabelCategory.TICKET },
        { title: 'Stuck', category: LabelCategory.TICKET },
        { title: 'Closed', category: LabelCategory.TICKET },
      ];
      defaults.forEach(async (label) => {
        await this.labelService.create(label);
      });
    }
  }

  private async addDefaultStamps(): Promise<void> {
    const hasSome = await this.stampService.findAll();
    if (hasSome.length === 0) {
      const defaults = [
        { title: 'blocker', category: StampCategory.PROJECT },
        { title: 'enhancement', category: StampCategory.PROJECT },
        { title: 'enhancement', category: StampCategory.TICKET },
        { title: 'internet', category: StampCategory.TICKET },
        { title: 'system error', category: StampCategory.TICKET },
      ];
      defaults.forEach(async (stamp) => {
        await this.stampService.create(stamp);
      });
    }
  }
}
