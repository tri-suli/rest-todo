export type RegisterResponseTypeSuccess = {
  message: string;
  access_token: string;
};

export type RegisterResponseTypeError = {
  errors: string;
};
