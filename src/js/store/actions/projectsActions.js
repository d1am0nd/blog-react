import {
  SET_PROJECTS,
} from '../const/projects';
import {projects} from 'config/projects';
import {getAll} from 'api/projects';

export function fetchProjects() {
  return (dispatch, state) => {
    return new Promise((resolve, reject) => {
      getAll()
        .then((res) => {
          dispatch({type: SET_PROJECTS, payload: res.data});
          resolve(projects);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};
