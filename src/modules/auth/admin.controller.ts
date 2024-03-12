import {
  Body,
  Controller,
  Delete,
  Param,
  ParseUUIDPipe,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { ERights } from '../../common/enums/users.rights.enum';
import { CreateUserDto } from '../user/dto/request/create-user.dto';
import { UserService } from '../user/services/user.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { SkipAuth } from './decorators/skip-auth.decorator';
import { RightsDecorator } from './decorators/user-rights.decorator';
import {
  ChangePasswordRequestDto,
  ConfirmPasswordRequestDto,
  RecoveryPasswordRequestDto,
} from './dto/request/change-password.request.dto';
import { SignInRequestDto } from './dto/request/sign-in.request.dto';
import { AuthUserResponseDto } from './dto/response/auth-user.response.dto';
import { TokenResponseDto } from './dto/response/token.responce.dto';
import { JwtRefreshGuard } from './guards/jwt.refresh.guard';
import { LoginGuard } from './guards/login.check_before.rigts.guard';
import { PremiumAccessGuard } from './guards/premium.access.guard';
import { UserAccessGuard } from './guards/user.access.guard';
import { IUserData } from './interfaces/user-data.interface';
import { AuthMapperWithTokens } from './services/auth.mapper';
import { AuthService } from './services/auth.service';

@ApiTags('Admin')
@Controller({ path: 'admin', version: '1' })
export class AdminController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}
  @SkipAuth()
  @ApiOperation({ summary: 'Login' })
  @RightsDecorator(ERights.Admin)
  @UseGuards(LoginGuard)
  @Post('sign-in')
  public async signIn(
    @Body() dto: SignInRequestDto,
  ): Promise<AuthMapperWithTokens> {
    return await this.authService.signIn(dto);
  }

  @ApiBearerAuth()
  @Post('logout')
  public async logout(
    @CurrentUser() userData: IUserData,
    @Body('refresh_token') refresh_token: string,
  ): Promise<void> {
    await this.authService.logout(refresh_token, userData);
  }
  @ApiBearerAuth()
  @RightsDecorator(ERights.Admin)
  @UseGuards(UserAccessGuard)
  @Delete('delete/:id')
  public async delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    await this.userService.remove(id);
  }
}
