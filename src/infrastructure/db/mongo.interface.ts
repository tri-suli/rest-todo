export interface IMongo {
  host(): string;
  name(): string;
  user(): string;
  pass(): string;
  cluster(): string;
  retryWrites(): boolean;
  writeConcern(): string;
}

export type DBConfig = {
  connection: string;
  options: {
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
  };
};
