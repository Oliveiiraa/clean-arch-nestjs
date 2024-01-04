import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserUseCase } from 'src/application/usecases/users/create-user.usecase';
import { GetAllUsersUseCase } from 'src/application/usecases/users/get-all-users.usecase';
import { UserCreateMapper } from 'src/domain/mappers/users/user-create.mapper';
import { UserCreatedMapper } from 'src/domain/mappers/users/user.created.mapper';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { User } from 'src/infrastructure/entities/user.entity';
import { RabbitMQModule } from 'src/infrastructure/messaging/rabbitmq/rabbitmq.module';
import { DatabaseUserRepository } from 'src/infrastructure/repositories/user.repository';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User]), RabbitMQModule],
  controllers: [UsersController],
  providers: [
    CreateUserUseCase,
    GetAllUsersUseCase,
    DatabaseUserRepository,
    UserCreateMapper,
    UserCreatedMapper,
    {
      provide: UserRepository,
      useClass: DatabaseUserRepository,
    },
  ],
})
export class UsersModule {}
