import { UserCreateDto } from 'src/application/dtos/users/user-create.dto';
import { Mapper } from 'src/domain/base/mapper.base';
import { User } from '../../../infrastructure/entities/user.entity';

export class UserCreateMapper extends Mapper<UserCreateDto, User> {
  public mapFrom(data: UserCreateDto): User {
    const user = new User();

    user.name = data.name;
    user.email = data.email;
    user.password = data.password;

    return user;
  }

  public mapTo(data: User): UserCreateDto {
    const user = new UserCreateDto();

    user.id = data.id;
    user.name = data.name;
    user.email = data.email;
    user.password = data.password;

    return user;
  }
}
