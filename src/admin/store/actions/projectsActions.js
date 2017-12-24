import {
  SET_PROJECTS,
} from '../const/projects';
import {projects} from '../../../../config/projects';

export function fetchProjects() {
  return (dispatch, state) => {
    return new Promise(resolve => {
      dispatch({type: SET_PROJECTS, payload: projects});
      resolve(projects);
    });
  };
};
