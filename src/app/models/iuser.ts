import { IAddress } from './iaddress';

export interface IUser {
  id?: number;
  email: string;
  role?: string[];
  password: string;
  address: IAddress;
  first_name: string;
  last_name: string;
  gender: string;
  birth_date: Date;
}
