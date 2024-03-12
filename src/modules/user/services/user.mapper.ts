import { UserEntity } from '../../../database/entities/user.entity';

export class UserMapper {
  public static toResponseDto(user: Partial<UserEntity>): Partial<UserEntity> {
    return {
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      age: user.age,
      city: user.city,
      role: user.role,
    };
  }
}
