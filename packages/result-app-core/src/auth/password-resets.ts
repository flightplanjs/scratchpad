export interface CanResetPassword {
  getEmail(): string;
  sendPassowrdReset(): Promise<void>;
}

export interface PasswordResetEntity {
  email: string;
  token: string;
  expires: Date;
}
