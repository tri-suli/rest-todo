export type FailedResponseType<T> = {
  errors: Array<T>;
};

export type RegisterResponseTypeSuccess = {
  message: string;
  access_token: string;
};

export type RegisterResponseTypeError = {
  errors: string;
};

export type LoginSuccessResponseType = {
  access_token: string;
};
