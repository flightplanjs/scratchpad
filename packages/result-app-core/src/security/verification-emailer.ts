export interface VerificationEmailerService {
  send(to: string, token: string): Promise<void>;
}
