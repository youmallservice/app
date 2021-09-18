import express from 'express';
import cors from 'cors';

import 'reflect-metadata';
import routes from './routes';
import errorHandler from './errors/handler';

import './database/connection';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.handleExceptionErrors();
  }

  private middlewares(): void {
    this.server.use(cors());
    this.server.use(express.json());
  }

  private routes(): void {
    this.server.use(routes);
  }

  private handleExceptionErrors(): void {
    this.server.use(errorHandler);
  }
}

export default new App().server;
