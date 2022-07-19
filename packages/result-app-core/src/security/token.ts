import { SignOptions, VerifyOptions } from 'jsonwebtoken';
import { UserSignup, UserCredentialsEntity } from '../auth/data/user';
import { HashService } from './hash';

export interface TokenService {
  generateRandom(strLength: number): Promise<string>;
  signJWT(
    payload: string | object | Buffer,
    options?: SignOptions,
  ): Promise<string>;
  verifyJWT(token: string, options?: VerifyOptions);
}

class UserVerificationService {
  tokenGenerator: TokenService;

  async sendVerificationEmail(user: UserCredentialsEntity<any>) {
    const signature = await this.tokenGenerator.signJWT(
      { email: user.email },
      { expiresIn: '2 d' },
    );
  }
}

export class SignupController {
  userVerification: UserVerificationService;
  hashService: HashService;

  async signup(input: UserSignup) {
    const user: UserCredentialsEntity<number> = {
      id: 1,
      email: input.email,
      password: await this.hashService.hash(input.password),
    };

    // Some sort of save here

    await this.userVerification.sendVerificationEmail(user);
  }
}
