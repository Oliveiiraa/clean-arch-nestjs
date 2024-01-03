import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from 'src/infrastructure/config/environment-config/environment-config.module';
import { EnvironmentConfigService } from 'src/infrastructure/config/environment-config/environment-config.service';
import { RabbitMQConsumerService } from './rabbitmq.consumer.service';
import { RabbitMQService } from './rabbitmq.service';

@Module({
  imports: [EnvironmentConfigModule],
  providers: [
    EnvironmentConfigService,
    RabbitMQConsumerService,
    RabbitMQService,
  ],
  exports: [RabbitMQConsumerService, RabbitMQService],
})
export class RabbitMQModule {}
