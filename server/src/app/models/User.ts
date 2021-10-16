import { StringSchema } from 'yup';
import { ObjectShape } from 'yup/lib/object';

export interface User {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  document: string;
  phone_1: string;
  phone_2?: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  number_house: string;
  cep: string;
}

export interface UserYupSchema extends ObjectShape {
  name: StringSchema;
  lastName: StringSchema;
  email: StringSchema;
  password: StringSchema;
  confirmPassword: StringSchema;
  document: StringSchema;
  phone_1: StringSchema;
  phone_2: StringSchema;
  street: StringSchema;
  neighborhood: StringSchema;
  city: StringSchema;
  state: StringSchema;
  number_house: StringSchema;
  cep: StringSchema;
}

export interface UserToken {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}
