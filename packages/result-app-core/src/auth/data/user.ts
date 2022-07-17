import { IEntity } from '../../data/entities';

export interface UserCredentialsEntity<T> extends IEntity<T> {
  email: string;
  password: string;
}

export interface UserSignupOutput<T> extends IEntity<T> {
  email: string;
}

export interface UserSignup {
  email: string;
  password: string;
  passwordConfirmation: string;
}
