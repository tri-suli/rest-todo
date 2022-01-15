import { IResponse } from 'src/interfaces/rest/response/response.interface';

export type ResponseEntityConstructorType<TD, TE> = {
  data: TD;
  errors?: TE;
  success?: boolean;
};

export class ResponseEntity implements IResponse<null, null> {
  public success = true;
  public data = null;
  public errors = null;
  public meta = {
    timezone: null,
    timestamps: null,
  };

  constructor(res: ResponseEntityConstructorType<any, any>) {
    this.success = res.success;
    this.data = res.data;
    this.errors = res.errors;
    this.meta = {
      timestamps: new Date(),
      timezone: 'UTC',
    };
  }
}
