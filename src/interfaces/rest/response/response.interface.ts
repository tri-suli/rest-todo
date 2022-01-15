type Meta = {
  timezone: string;
  timestamps: string;
};

export interface IResponse<TD, TE> {
  success: boolean;
  data: TD;
  errors: TE;
  meta: Meta;
}
