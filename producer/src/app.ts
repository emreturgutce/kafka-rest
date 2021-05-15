import 'reflect-metadata';
import express from 'express';
import { useContainer, useExpressServer } from 'routing-controllers';
import { Container } from 'typedi';

useContainer(Container);

const app = express();

app.disable('x-powered-by');
app.use(express.json());

useExpressServer(app, {
  controllers: [__dirname + '/controllers/*.ts'],
});

export { app };
