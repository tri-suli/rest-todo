export interface IErrors {
  [key: string]: Array<string>;
}

export interface IResponseGeneral<T> {
  data: T;
  errors: IErrors;
}
