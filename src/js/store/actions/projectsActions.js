import {
  SET_PROJECTS,
} from '../const/projects';
import {getAll} from '@/api/projects';

const fetchProjects = () => {
  return (dispatch, state) => {
    return new Promise((resolve, reject) => {
      getAll()
        .then((res) => {
          dispatch({type: SET_PROJECTS, payload: res.data});
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export {
  fetchProjects,
};
