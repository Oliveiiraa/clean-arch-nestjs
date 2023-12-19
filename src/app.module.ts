import { Module } from '@nestjs/common';
import { UserRepository } from './core/repositories/user.repository';
import { UsersCacheMemoryRepository } from './infrastructure/cache-memory/users/users-cache-memory.repository';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { UsersControllers } from './presentation/users/users.controller';
import { CreateUserUseCase } from './usecases/users/create-user.usecase';
import { GetAllUsersUseCase } from './usecases/users/get-all-users.usecase';

@Module({
  imports: [EnvironmentConfigModule],
  controllers: [UsersControllers],
  providers: [
    {
      provide: UserRepository,
      useClass: UsersCacheMemoryRepository,
    },
    CreateUserUseCase,
    GetAllUsersUseCase,
  ],
})
export class AppModule {}
