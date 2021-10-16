import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';
import { UserToken } from '../models/User';

export default async function authentication(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> {
  // Validando o recebimento do token
  const { authorization } = request.headers;

  if (!authorization) {
    return response
      .status(401)
      .json({ error: 'Authentication', description: 'Token not provided.' });
  }

  // Validando formatação do authorization
  const token: string = authorization.split(' ')[1];

  if (!token) {
    return response
      .status(401)
      .json({ error: 'Authentication', description: 'Badly formatted token.' });
  }

  // Validando se o token foi gerado pela aplicação
  try {
    // const functionToToken = await promisify(jwt.verify);
    const dataUser: unknown = await promisify<string, string>(jwt.verify)(
      token,
      authConfig.secret as string
    );

    request.user = dataUser as UserToken;

    return next();
  } catch (err) {
    const { name: description } = err as jwt.VerifyErrors;

    return response.status(401).json({ error: 'Token Invalid.', description });
  }
}
