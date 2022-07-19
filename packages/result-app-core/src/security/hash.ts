export interface HashService {
  requiresHash(str: string): boolean;
  hash(str: string, saltRounds?: number): Promise<string>;
  compare(raw: string, hash: string): Promise<boolean>;
}
