import { UserService } from './user.service';
import { Controller, Get, HttpCode, Patch, UsePipes, Put, Param } from '@nestjs/common'
import { ValidationPipe, Body } from '@nestjs/common'
import { async } from 'rxjs';
import { Auth } from 'src/auth/decorators/auth.decoraror';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { userDto } from './user.dto';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // get profile
  // toggle favorite
  // update profile
  @Get('profile')
  @Auth()
  async getProfile(@CurrentUser("id") id: number) {
    return await this.userService.byId(id)
  }


  @UsePipes(new ValidationPipe())
  @Put('profile')
  @HttpCode(200)
  @Auth()
  async updateProfile(@CurrentUser('id') id: number ,@Body() dto: userDto) {
    return await this.userService.updateProfile(id, dto)
  }



  





}
