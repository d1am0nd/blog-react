import axios, {AxiosPromise, AxiosRequestConfig} from 'axios';
import {apiUrl} from '../../../config/api';
import {token} from '../misc/auth';

// To add token on the go
const paramsWithToken = (params = {} as AxiosRequestConfig) => {
  const bearer = token();
  return bearer !== null ? {
    ...params,
    headers: {
      ...params.headers,
      Authorization: bearer,
    },
  } : params;
};

const url = (path: string) => `${apiUrl}/${path}`;

export const post = (
  path: string,
  data = {} as any,
  params = {} as AxiosRequestConfig
): AxiosPromise => axios.post(url(path), data, paramsWithToken(params));

export const get = (
  path: string,
  params = {} as AxiosRequestConfig
): AxiosPromise => axios.get(url(path), paramsWithToken(params));

export const patch = (
  path: string,
  data = {} as any,
  params = {} as AxiosRequestConfig
): AxiosPromise => axios.patch(url(path), data, paramsWithToken(params));

