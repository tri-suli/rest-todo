export type UseCaseType = {
  access_token: string;
};

export type LoginUseCaseResult = {
  access_token: string;
};

export interface ILoginUsecase {
  email: string;
  password: string;
}
