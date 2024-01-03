import { Injectable } from '@nestjs/common';
import { Channel, connect } from 'amqplib';
import { IRabbitMQ } from 'src/domain/messaging/rabbitmq.interface';
import { EnvironmentConfigService } from 'src/infrastructure/config/environment-config/environment-config.service';

@Injectable()
export class RabbitMQService implements IRabbitMQ {
  private connection: any;
  private channel: Channel;

  constructor(private config: EnvironmentConfigService) {}

  async startConsuming(
    queue: string,
    callback: (message: any) => void,
  ): Promise<void> {
    this.connection = await connect(this.config.getMessagingUrl());
    this.channel = await this.connection.createChannel();

    await this.channel.assertQueue(queue);

    this.channel.consume(queue, (message) => {
      if (message !== null) {
        callback(JSON.parse(message.content.toString()));
        this.channel.ack(message);
      }
    });
  }

  async pushToQueue(queue: string, message: any): Promise<void> {
    await this.channel.assertQueue(queue);
    this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
  }
}
