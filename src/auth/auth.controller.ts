import { Controller, HttpCode, Post, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ValidationPipe, Body } from '@nestjs/common';
import { authDto } from './auth.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() dto: authDto) {
    return this.authService.register(dto);
  }

}
