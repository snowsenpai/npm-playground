import 'dotenv/config';
import 'module-alias/register';
import { App } from './app';
import { apiRouters } from './resources';

const app = new App(apiRouters, +(process.env.PORT!));

app.listen();