import {
  newProject as newProjectApi,
  update,
  deleteProject as deleteProjectApi,
  findById,
  getAll,
} from 'admin/api/projects';
import {
  SET_PROJECTS,
  SET_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
} from 'admin/store/const/projects';

export const fetchProjects = () => {
  return (dispatch, state) => {
    return new Promise((resolve, reject) => {
      getAll()
        .then((res) => {
          dispatch({type: SET_PROJECTS, payload: res.data});
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export const fetchProjectById = (id) => {
  return (dispatch, state) => {
    return new Promise((resolve, reject) => {
      findById(id)
        .then((res) => {
          dispatch({type: SET_PROJECT, payload: res.data});
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export const newProject = (project) => {
  return (dispatch, state) => {
    return new Promise((resolve, reject) => {
      newProjectApi(project)
        .then((res) => {
          dispatch({type: SET_PROJECT, payload: project});
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export const updateProject = (project) => {
  return (dispatch, state) => {
    return new Promise((resolve, reject) => {
      update(project)
        .then((res) => {
          dispatch({type: UPDATE_PROJECT, payload: res.project});
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export const deleteProject = (id) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      deleteProjectApi(id)
        .then((res) => {
          dispatch({type: DELETE_PROJECT, payload: id});
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};
