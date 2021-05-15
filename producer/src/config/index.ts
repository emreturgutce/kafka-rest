import { config } from 'dotenv';

config();

export const {
  PORT,
  KAFKA_BROKER_URL,
  KAFKA_CLIENT_ID,
  TOPIC_NAME,
} = process.env;
