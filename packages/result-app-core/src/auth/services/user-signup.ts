import { UserSignup, UserSignupOutput } from '../data/user';

export interface UserSignupService<T> {
  createUser(userInput: UserSignup): Promise<UserSignupOutput<T>>;
}
