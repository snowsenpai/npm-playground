import express, { Application, Router } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { errorMiddleware, handelInvalidRoutes } from './middlewares';

class App {
  public express: Application;
  public port: number;

  constructor(apiRouters: Router, port: number) {
    this.express = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeRoutes(apiRouters);
    this.initializeErrorHandling();
  }
  private initializeMiddlewares(): void {
    this.express.use(cors());
    this.express.use(morgan('dev'));
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
  }

  private initializeRoutes(apiRoutes: Router): void {
    this.express.use('/api/v1', apiRoutes);
    this.express.use('*', handelInvalidRoutes);
  }

  private initializeErrorHandling(): void {
    this.express.use(errorMiddleware);
  }

  public listen(): void {
    this.express.listen(this.port, () =>
      console.log(
        `server running in "${process.env.NODE_ENV}" and listening on port "${this.port}"`,
      ),
    );
  }
}

export { App };