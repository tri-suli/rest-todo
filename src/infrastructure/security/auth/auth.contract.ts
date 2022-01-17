import { ObjectId } from 'mongoose';

export type JwtPayloadType = {
  sub: ObjectId | string;
  email: string;
  name: string;
};

export interface IAuthService {
  register();
  login();
}
