import { UserCreatedDto } from 'src/application/dtos/users/user-created.dto';
import { Mapper } from 'src/domain/base/mapper.base';
import { User } from '../../../infrastructure/entities/user.entity';

export class UserCreatedMapper implements Mapper<UserCreatedDto, User> {
  public mapFrom(data: UserCreatedDto): User {
    const user = new User();

    user.id = data.id;
    user.name = data.name;

    return user;
  }

  public mapTo(data: User): UserCreatedDto {
    const user = new UserCreatedDto();

    user.id = data.id;
    user.name = data.name;

    return user;
  }
}
