import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/core/domain/entities/users/user.entity';
import { UserRepository } from 'src/core/repositories/user.repository';
import { RepositoryCacheMemory } from '../repository-cache-memory';

@Injectable()
export class UsersCacheMemoryRepository
  extends RepositoryCacheMemory<UserEntity>
  implements UserRepository {}
