import express from 'express';
import cors from 'cors';
import { resolve } from 'path';

import 'reflect-metadata';
import 'dotenv/config';

import routes from './routes';
import errorHandler from './errors/handler';
import './database/connection';

import { isDevelopment } from './utils/environment';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.handleExceptionErrors();
    this.accessStaticFiles();
  }

  private middlewares(): void {
    this.server.use(cors());
    this.server.use(express.json());
  }

  private accessStaticFiles(): void {
    if (isDevelopment()) {
      this.server.use('/docs', express.static(resolve(__dirname, '..', 'doc')));
    }

    // todo view photos
  }

  private routes(): void {
    this.server.use('/api/v1/', routes);
  }

  private handleExceptionErrors(): void {
    this.server.use(errorHandler);
  }
}

export default new App().server;
