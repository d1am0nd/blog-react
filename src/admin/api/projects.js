import {get, post} from './defaults';
import p from './params';

const GET_BY_ID_URL = p.apiUrl + '/api/projects/single/';
const GET_ALL_URL = p.apiUrl + '/api/projects/all';
const POST_EDIT_URL = p.apiUrl + '/api/projects/edit/';
const POST_NEW_URL = p.apiUrl + '/api/projects/create';
const DELETE_ID = p.apiUrl + '/api/projects/delete/';

export const newProject = (project) => post(POST_NEW_URL, project);

export const update = (project) => post(POST_EDIT_URL + project.id, project);

export const deleteProject = (id) => post(DELETE_ID + id);

export const findById = (id) => get(GET_BY_ID_URL + id);

export const getAll = () => get(GET_ALL_URL);
