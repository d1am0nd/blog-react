import {AxiosPromise} from 'axios';
import {get, post} from './defaults';
import {IUser} from '../misc/auth';

export {
  IUser,
};

export interface ICreds {
  email: string;
  password: string;
};

export const login = (creds: ICreds): AxiosPromise<IUser> => (
  post('api/users/login', creds, {
    withCredentials: true,
  })
);

export const refresh = () => (
  get('api/users/current')
);
