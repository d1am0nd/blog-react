import {createSelector} from 'reselect';

const projectsSelector = (state) => state.projects;

const getProjects = createSelector(
  projectsSelector,
  (projects) => projects.projects
);

export {
  getProjects,
};
