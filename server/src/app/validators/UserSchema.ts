import { RequiredStringSchema } from 'yup/lib/string';
import * as Yup from 'yup';

import { UserYupSchema } from '../models/User';

import { TypeObject } from '../../utils/typeObject';

export async function validationUserSchema(
  objectToValidation: TypeObject
): Promise<void> {
  const userSchema: Yup.ObjectSchema<UserYupSchema> = Yup.object().shape({
    name: Yup.string()
      .min(3, 'O campo deve ter no mínimo três caracteres.')
      .required('O nome é obrigatório.'),
    lastName: Yup.string()
      .min(3, 'O campo deve ter no mínimo três caracteres.')
      .required('O sobrenome é obrigatório.'),
    email: Yup.string()
      .email('O campo informado deve ser um email.')
      .required('O email é obrigatório.'),
    password: Yup.string()
      .min(8, 'O campo deve ter no mínimo oito caracters.')
      .required('A senha é obrigatória.'),
    confirmPassword: Yup.string()
      .min(8, 'O campo deve ter no mínimo oito caracters.')
      .when(
        'password',
        (password: RequiredStringSchema<string>, field: Yup.BaseSchema) =>
          password
            ? field
                .required('A confirmação da senha é obrigatória.')
                .oneOf([Yup.ref('password')])
            : field
      ),
    document: Yup.string()
      .min(11, 'Documento inválido.')
      .max(14, 'Documento inválido.')
      .required('O campo de documento é obrigatório.'),
    phone_1: Yup.string()
      .matches(/^\d*$/, 'O telefone só deve conter apenas números.')
      .min(8, 'O telefone deve conter no mínimo oito dígitos.')
      .required('O campo de telefone é obrigatório.'),
    phone_2: Yup.string()
      .matches(/^\d*$/, 'O telefone só deve conter apenas números.')
      .min(8, 'O telefone deve conter no mínimo oito dígitos.'),
    street: Yup.string().required('O campo de rua é obrigatório.'),
    neighborhood: Yup.string().required('O campo de bairro é obrigatório.'),
    city: Yup.string().required('O campo de cidade é obrigatório.'),
    state: Yup.string().required('O campo de estado é obrigatório.'),
    number_house: Yup.string().required(
      'O campo de número da residência é obrigatório.'
    ),
    cep: Yup.string()
      .required('O campo é obrigatório.')
      .length(8, 'O cep deve conter oito dígitos.')
      .required('O campo de cep deve ser obrigatório.'),
  });

  await userSchema.validate(objectToValidation);
}
