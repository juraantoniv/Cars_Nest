import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { log } from 'console';

import { EEmailAction } from '../../common/enums/email.action.enum';
import { EmailService } from '../../common/services/email.service';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { SkipAuth } from '../auth/decorators/skip-auth.decorator';
import { IUserData } from '../auth/interfaces/user-data.interface';
import { CreateUserDto } from './dto/request/create-user.dto';
import { UpdateUserDto } from './dto/request/update-user.dto';
import { UserService } from './services/user.service';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async findAll() {
    return await this.userService.findAll();
  }

  @ApiBearerAuth()
  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }
  @ApiBearerAuth()
  @Patch()
  public async update(
    @Body() updateUserDto: UpdateUserDto,
    @CurrentUser() userData: IUserData,
  ) {
    return await this.userService.update(updateUserDto, userData);
  }

  @ApiBearerAuth()
  @Get('user/me')
  public async me(@CurrentUser() userData: IUserData) {
    return await this.userService.me(userData);
  }
}
