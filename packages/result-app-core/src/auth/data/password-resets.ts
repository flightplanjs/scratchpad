import { UserCredentialsEntity } from './user';

export interface ResetPasswordService<T> {
  getEmailForUser(user: UserCredentialsEntity<T>): string;
  sendPassowrdReset(user: UserCredentialsEntity<T>): Promise<void>;
  createPasswordResetEntity(
    user: UserCredentialsEntity<T>,
  ): Promise<PasswordResetEntity>;
}

export interface PasswordResetEntity {
  email: string;
  token: string;
  expires: Date;
}
