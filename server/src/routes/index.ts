import { Router, Request, Response } from 'express';

const routes: Router = Router();

/**
 * @api {get} / 01.Home
 * @apiVersion  1.0.0
 * @apiGroup General
 * @apiDescription Informações da básicas da API.
 *
 * @apiSuccess (200) {String} name Nome da API
 * @apiSuccess (200) {String} version Versão da API
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "name": "Youmall",
 *      "description": "Projeto Youmall para vendas"
 *      "version": "1.0.0"
 *  }
 */
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
