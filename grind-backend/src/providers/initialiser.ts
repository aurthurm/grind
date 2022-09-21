import { Injectable, Logger } from '@nestjs/common';
import { SUPER_USER } from 'src/helpers/super_user';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AppInitService {
  constructor(private readonly userService: UserService) {}

  public initialize() {
    Logger.log('App Initialiser');
    this.createSuperUser();
    Logger.log('App Initialiser complete');
  }

  private async createSuperUser(): Promise<void> {
    const exists = await this.userService.findOneBy({
      userName: SUPER_USER.userName,
    });
    if (exists) return;
    await this.userService.create({ ...SUPER_USER });
  }
}
