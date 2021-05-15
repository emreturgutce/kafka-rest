import { Body, Post, HttpCode, JsonController } from 'routing-controllers';
import { Service } from 'typedi';
import {TOPIC_NAME} from '../config';
import { KafkaService } from '../services/kafka';

@JsonController()
@Service()
export class UserController {
  constructor(private readonly kafkaService: KafkaService) {}

  @Post('/users')
  @HttpCode(200)
  post(@Body() body: any) {
    this.kafkaService.sendMessage({
      topic: TOPIC_NAME!,
      messages: [
        {
          value: JSON.stringify(body),
        },
      ],
    });

    return {
      status: 200,
      message: 'Message sent to kafka',
    };
  }
}
