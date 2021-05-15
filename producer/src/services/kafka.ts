import { Kafka, Producer, ProducerRecord } from 'kafkajs';
import { Service } from 'typedi';
import { KAFKA_BROKER_URL, KAFKA_CLIENT_ID } from '../config';

@Service()
export class KafkaService {
  private readonly kafka: Kafka;
  private readonly producer: Producer;

  constructor() {
    this.kafka = new Kafka({
      clientId: KAFKA_CLIENT_ID!,
      brokers: [KAFKA_BROKER_URL!],
    });

    this.producer = this.kafka.producer();
  }

  async sendMessage(record: ProducerRecord) {
    await this.producer.connect();
    return this.producer.send(record);
  }
}
