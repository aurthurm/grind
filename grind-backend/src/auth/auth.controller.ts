import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // @UseGuards(JwtAuthGuard)
  /**
   * Reset Password
   * @param payload
   * @param req
   * @returns
   */
  @Post('reset-password')
  async resetPassword(@Body() payload: any, @Request() req) {
    const { email, role } = payload;
    return await this.authService.resetPassword(email, req, role);
  }

  @Post('new-password')
  async newPassword(@Body() payload: any) {
    const { resetkey, password, role } = payload;
    return await this.authService.newPassword(resetkey, password, role);
  }
}
