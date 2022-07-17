import { UserCredentialsEntity } from './user';

export interface VerifiesEmailService<
  T,
  User extends UserCredentialsEntity<T>,
> {
  checkEmailIsVerified(user: User): Promise<boolean>;
  markEmailAsVerified(user: User): Promise<void>;
  sendVarificationEmail(user: User): Promise<void>;
  getUserForVerification(token: string): Promise<User>;
}
