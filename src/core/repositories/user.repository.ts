import { Repository } from '../base/repository.base';
import { UserEntity } from '../domain/entities/users/user.entity';

export abstract class UserRepository extends Repository<UserEntity> {}
