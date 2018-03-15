import {
  SET_PROJECTS,
  SET_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
} from '../const/projects';

const initialState = {
  projects: [],
  project: {},
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_PROJECTS: {
    state = {
      ...state,
      projects: action.payload,
    };
    break;
  }
  case SET_PROJECT: {
    state = {
      ...state,
      project: action.payload,
    };
    break;
  }
  case UPDATE_PROJECT: {
    state = {
      ...state,
      projects: state.projects.map((project) => {
        if (project.id === action.payload.id) {
          project = action.payload;
        }
        return {
          ...project,
        };
      }),
    };
    break;
  }
  case DELETE_PROJECT: {
    state = {
      ...state,
      projects: state.projects.filter((project) => {
        return project.id !== action.payload;
      }),
    };
    break;
  }
  }
  return state;
};
