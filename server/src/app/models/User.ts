import * as Yup from 'yup';
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
  name: Yup.StringSchema;
  lastName: Yup.StringSchema;
  email: Yup.StringSchema;
  password: Yup.StringSchema;
  confirmPassword: Yup.StringSchema;
  document: Yup.StringSchema;
  phone_1: Yup.StringSchema;
  phone_2: Yup.StringSchema;
  street: Yup.StringSchema;
  neighborhood: Yup.StringSchema;
  city: Yup.StringSchema;
  state: Yup.StringSchema;
  number_house: Yup.StringSchema;
  cep: Yup.StringSchema;
}
