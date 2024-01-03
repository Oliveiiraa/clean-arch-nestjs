export interface IRabbitMQ {
  startConsuming(
    queue: string,
    callback: (message: any) => void,
  ): Promise<void>;
  pushToQueue(queue: string, message: any): Promise<void>;
}
