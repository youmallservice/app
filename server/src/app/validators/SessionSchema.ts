import * as Yup from 'yup';

import { SessionYupSchema } from '../models/Session';

import { TypeObject } from '../../utils/typeObject';

export async function validationSessionSchema(
  objectToValidation: TypeObject
): Promise<void> {
  const sessionSchema: Yup.ObjectSchema<SessionYupSchema> = Yup.object().shape({
    email: Yup.string()
      .email('O campo informado deve ser um email.')
      .required('O email é obrigatório.'),
    password: Yup.string()
      .min(8, 'O campo deve ter no mínimo oito caracters.')
      .required('A senha é obrigatória.'),
  });

  await sessionSchema.validate(objectToValidation);
}
