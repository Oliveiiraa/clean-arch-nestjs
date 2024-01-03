import { Injectable, OnModuleInit } from '@nestjs/common';
import { RabbitMQService } from './rabbitmq.service';

@Injectable()
export class RabbitMQConsumerService implements OnModuleInit {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  async onModuleInit(): Promise<void> {
    await this.startConsumingOrders();
  }

  private async startConsumingOrders(): Promise<void> {
    await this.rabbitMQService.startConsuming(
      'user:server',
      async (message) => {
        console.log('Message received: ', message);
      },
    );
  }
}
