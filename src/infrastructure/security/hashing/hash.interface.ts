export interface IHash {
  hash(password: string): Promise<string>;
  matched(password: string, hash: string): Promise<boolean>;
  salt(): Promise<string>;
}
