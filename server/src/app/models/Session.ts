import { StringSchema } from 'yup';
import { ObjectShape } from 'yup/lib/object';

export interface SessionModel {
  email: string;
  password: string;
}

export interface SessionYupSchema extends ObjectShape {
  email: StringSchema;
  password: StringSchema;
}
