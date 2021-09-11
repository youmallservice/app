import { Router, Request, Response } from 'express';

const routes: Router = Router();

routes.get(
  '/',
  (request: Request, response: Response): Response =>
    response.status(200).json({
      name: 'Youmall',
      description: 'Projeto Youmall para vendas',
      version: '1.0.0',
    })
);

export default routes;
