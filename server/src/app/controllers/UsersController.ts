import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';

import { validationUserSchema } from '../validators/UserSchema';
import UserEntity from '../entities/User';
import { User as UserModel } from '../models/User';

class UsersControllers {
  public async store(request: Request, response: Response): Promise<Response> {
    // Validando os campos enviados
    await validationUserSchema(request.body);

    // Criando o repositório do usuário
    const userRepository: Repository<UserEntity> = getRepository(UserEntity);

    // Verificando se já existe o usuário na base
    const { email } = request.body as UserModel;

    const existsUser: UserEntity | undefined = await userRepository.findOne({
      where: { email },
    });

    if (existsUser) {
      return response.status(400).json({
        error: 'Error in user create.',
        message: 'User already exists.',
      });
    }

    // Criando instância do novo usuário
    const {
      name,
      lastName,
      document,
      password,
      cep,
      city,
      neighborhood,
      number_house,
      phone_1,
      state,
      street,
      phone_2,
    } = request.body as UserModel;

    const newUser: UserEntity = userRepository.create({
      name: `${name} ${lastName}`,
      document,
      email,
      password,
      cep,
      city,
      neighborhood,
      number_house,
      phone_1,
      state,
      street,
      phone_2,
    });

    // Mantendo informações no banco
    await userRepository.save(newUser);

    return response.status(201).json({
      message: 'User created with successfull.',
      user: {
        name,
        email,
        isAdmin: newUser.isAdmin,
      },
    });
  }
}

export default new UsersControllers();
