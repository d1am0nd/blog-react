import * as React from 'react';
import H1 from '../Simple/H1';
import Project from '../Simple/Project';
import {IMeta} from '../hoc/setsMeta';
import {IRequest} from '../hoc/fetchesData';
import {IProject, getProjects} from '../../api/projects';

interface IProps {
  projects: Array<IProject>;
};

const Projects: React.FunctionComponent<IProps> = ({
  projects,
}) => (
  <>
    <H1>Projects</H1>
    {projects.map((p) => (
      <Project key={p.id} project={p} />
    ))}
  </>
);

const projectsRequest: IRequest<undefined, Array<IProject>> = {
  request: () => getProjects(),
  paramName: 'projects',
};

export const setMeta: IMeta<any> = {
  title: () => 'Projects',
  description: () => 'Dev Kordes - side projects',
  url: () => '/my-projects',
};

export const requests = [projectsRequest];

export default Projects;
