import { IEntity } from '../data/entities';

export interface UserCredentialsEntity<T> extends IEntity<T> {
  email: string;
  password: string;
}

export interface UserSignup {
  email: string;
  password: string;
  passwordConfirmation: string;
}
