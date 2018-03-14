import {
  SET_PROJECTS,
} from '../const/projects';

const initialState = {
  projects: [],
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
  }
  return state;
};
