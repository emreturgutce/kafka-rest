import { config } from 'dotenv';
import { Kafka } from 'kafkajs';

config(); // Load the env vars

const { TOPIC_NAME, KAFKA_BROKER_URL, KAFKA_CLIENT_ID } = process.env;

if (!TOPIC_NAME || !KAFKA_BROKER_URL || !KAFKA_CLIENT_ID) {
  console.error('Environment variables are not set correctly.');
  process.exit(1);
}

const kafka = new Kafka({
  clientId: KAFKA_CLIENT_ID,
  brokers: [KAFKA_BROKER_URL],
});

async function run() {
  try {
    const admin = kafka.admin();

    await admin.connect();
    await admin.createTopics({
      topics: [
        {
          topic: TOPIC_NAME!,
        },
      ],
    });
    console.log(`'${TOPIC_NAME}' topic created successfully!`);

    await admin.disconnect();

    const consumer = kafka.consumer({
      groupId: 'users-consumer-group',
    });

    await consumer.connect();
    await consumer.subscribe({
      topic: TOPIC_NAME!,
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async (result) => {
        console.log(`Message Received: ${result.message.value}`);
      },
    });
  } catch (error) {
    console.error(`Error occurred: ${error}`);
  }
}

setTimeout(run, 30000);
