import {
  Injectable,
  Logger,
  UnprocessableEntityException,
} from '@nestjs/common';

import { EFileTypes, S3Service } from '../../../common/services/s3.service';
import { UserEntity } from '../../../database/entities/user.entity';
import { IUserData } from '../../auth/interfaces/user-data.interface';
import { CreateUserDto } from '../dto/request/create-user.dto';
import { UpdateUserDto } from '../dto/request/update-user.dto';
import { UserRepository } from '../user.repository';
import { UserMapper } from './user.mapper';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    private readonly userRepository: UserRepository,
    private readonly s3Serv: S3Service,
  ) {}

  public async create(createUserDto: CreateUserDto, file: Express.Multer.File) {
    this.logger.log('Creating user with DTO:', createUserDto);
    const newUser = this.userRepository.create(createUserDto);

    const user = await this.userRepository.save(newUser);
    const filePath = await this.s3Serv.uploadFile(
      file,
      EFileTypes.User,
      user.id,
    );
    newUser.avatar = filePath;
    await this.userRepository.save(user);
    return newUser;
  }

  public async findAll() {
    return await this.userRepository.find();
  }

  public async findOne(id: string) {
    return await this.findUserByIdOrException(id);
  }

  public async update(updateUserDto: UpdateUserDto, userData: IUserData) {
    const entity = await this.findUserByIdOrException(userData.userId);
    this.userRepository.merge(entity, updateUserDto);
    return await this.userRepository.save(entity);
  }

  public async me(userData: IUserData) {
    try {
      return UserMapper.toResponseDto(
        await this.findUserByIdOrException(userData.userId),
      );
    } catch (e) {
      console.log('log', e);
    }
  }

  public async remove(id: string) {
    const etity = await this.userRepository.findOneBy({ id });
    if (!etity) {
      throw new UnprocessableEntityException('User not found');
    }

    await this.userRepository.remove(etity);
  }
  private async findUserByIdOrException(userId: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new UnprocessableEntityException('User entity not found');
    }
    return user;
  }
}
