import 'express-async-errors';
import 'dotenv/config';
import { App } from './app';
import { appRoutes } from './app.routes';

const app = new App(appRoutes, +process.env.PORT!);

app.listen();
