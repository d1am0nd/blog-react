import {get, post} from './defaults';
import p from './params';

const GET_BY_SLUG_URL = p.apiUrl + '/api/posts/single/';
const GET_MINE_URL = p.apiUrl + '/api/posts/my/all';
const POST_EDIT_URL = p.apiUrl + '/api/posts/edit/';
const POST_NEW_URL = p.apiUrl + '/api/posts/create';
const DELETE_ID = p.apiUrl + '/api/posts/delete/';

export const newPost = (data) => post(POST_NEW_URL, data);

export const update = (data) => post(POST_EDIT_URL + data.id, data);

export const deletePost = (id) => post(DELETE_ID + id);

export const findBySlug = (slug) => get(GET_BY_SLUG_URL + slug);

export const getMine = () => get(GET_MINE_URL);
