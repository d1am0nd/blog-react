import axios from 'axios';
import p from './params';

const GET_ALL_URL = p.apiUrl + '/api/projects/all';

export const getAll = function() {
  return axios.get(GET_ALL_URL);
};
