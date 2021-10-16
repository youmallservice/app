import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import jwt from 'jsonwebtoken';

import { validationSessionSchema } from '../validators/SessionSchema';
import UserEntity from '../entities/User';
import { UserToken } from '../models/User';
import { TypeObject } from '../../utils/typeObject';
import { SessionModel } from '../models/Session';
import authConfig from '../../config/auth';

class SessionController {
  public async store(request: Request, response: Response): Promise<Response> {
    // Validando campos enviados
    await validationSessionSchema(request.body);

    // Criando o repositório do usuário
    const userRepository: Repository<UserEntity> = getRepository(UserEntity);

    // Regastando dados da requisição
    const { email, password } = request.body as SessionModel;

    // Objeto geral de resposta ao erro de autenticação
    const objectError: TypeObject = {
      error: 'Fail loggin.',
      message: 'Email or password invalid.',
    };

    // Verificando se o email é de um usuário válido
    const user: UserEntity | undefined = await userRepository.findOne({
      where: {
        email,
        deleted_at: null,
      },
    });

    if (!user) {
      return response.status(400).json(objectError);
    }

    // Verificando se o password é válido
    if (!(await user.checkPassword(password))) {
      return response.status(400).json(objectError);
    }

    // Gerando o token
    const { id, name, isAdmin } = user;

    const userToken: UserToken = {
      id,
      name,
      email,
      isAdmin,
    };

    const { secret, expiresIn } = authConfig;

    return response.status(201).json({
      message: 'Session created with sucessfull.',
      user: userToken,
      token: jwt.sign(userToken, secret as string, {
        expiresIn,
      }),
    });
  }
}

export default new SessionController();
