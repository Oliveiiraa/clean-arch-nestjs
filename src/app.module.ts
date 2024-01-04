import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { DatabaseConfigModule } from './infrastructure/database/database.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
import { UsersModule } from './presentation/users/users.module';

@Module({
  imports: [
    EnvironmentConfigModule,
    LoggerModule,
    ExceptionsModule,
    RepositoriesModule,
    DatabaseConfigModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
