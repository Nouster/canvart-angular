import { IAddress } from './iaddress';
import { INFT } from './inft';

export interface IUser {
  id?: number;
  email: string;
  role?: string[];
  password: string;
  address: IAddress;
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: Date;
  nft?: INFT[];
}
