export interface EncryptService {
  encryptString(str: string): Promise<string>;
  decryptString(str: string): Promise<string>;
  encryptJson<T>(str: T): Promise<string>;
  decryptJson<T>(str: string): Promise<T>;
}
