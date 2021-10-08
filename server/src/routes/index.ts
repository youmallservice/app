import { Router, Request, Response } from 'express';

import UserController from '../app/controllers/UsersController';

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

/**
 * @api {post} /users/signup 02.Criar um usuário
 * @apiVersion  1.0.0
 * @apiGroup General
 * @apiDescription Permite o cadastro na plataforma.
 *
 * @apiParam (Body) {String} name Nome do usuário
 * @apiParam (Body) {String} lastName Sobrenome do usuário
 * @apiParam (Body) {String} email Email do usuário
 * @apiParam (Body) {String} password Senha do usuário
 * @apiParam (Body) {String} confirmPassword Confirmação da senha do usuário
 * @apiParam (Body) {String} document Documento CPF/CNPJ. Apenas os dígitos
 * @apiParam (Body) {String} phone_1 Telefone primário do usuário. Apenas os dígitos
 * @apiParam (Body) {String} phone_2 Telefone secundário do usuário, opcional. Apenas os dígitos
 * @apiParam (Body) {String} street Logradouro do usuário
 * @apiParam (Body) {String} neighborhood Bairro do usuário
 * @apiParam (Body) {String} city Cidade do usuário
 * @apiParam (Body) {String} state Estado do usuário
 * @apiParam (Body) {String} number_house Número do usuário
 * @apiParam (Body) {String} cep CEP do usuário
 *
 * @apiExample {json} Exemplo de requisição:
 * {
 *    "name": "Fulano de Tal",
 *    "lastName": "da Silva Souza",
 *    "email": "fulanodetal@email.com",
 *    "password": "passwordExample",
 *    "confirmPassword": "passwordExample",
 *    "document": "12345678910",
 *    "phone_1": "99998888",
 *    "phone_2": "99998888",
 *    "street": "Rua Longe",
 *    "neighborhood": "Perto",
 *    "city": "Olimpo",
 *    "state": "Elísios",
 *    "number_house": "12354",
 *    "cep": "12345678"
 * }
 *
 * @apiSuccess (201) {String} message Mensagem de sucesso.
 * @apiSuccess (201) {Object} user Objeto contendo informações do usuário.
 * @apiSuccess (201) {String} user.name Nome completo do usuário.
 * @apiSuccess (201) {String} user.email Email do usuário
 * @apiSuccess (201) {String} user.isAdmin Flag comportando dados se o usuário é administrador.
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 201 OK
 *  {
 *      "message": "User created with successfull.",
 *      "user": {
 *        "name": "Fulano de Tal da Silva",
 *        "email": "fulanodetal@email.com",
 *        "isAdmin": false,
 *      }
 *  }
 *
 * @apiErrorExample {json} Campos inválidos - Error-Response:
 *  HTTP/1.1 400 Error
 *  {
 *      "error": "Validation Fails.",
 *      "description": {
 *        "path": "password",
 *        "errors": [
 *          "A senha é obrigatória.",
 *          "A senha deve ter no mínimo 8 carateres."
 *        ]
 *      }
 *  }
 *
 * @apiErrorExample {json} Email duplicado - Error-Response:
 *  HTTP/1.1 400 Error
 *  {
 *      "error": "Error in user create.",
 *      "message": "User already exists.",
 *  }
 */
routes.post('/users/signup', UserController.store);

export default routes;
