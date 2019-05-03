import * as React from 'react';
import H2 from './H2';
import Summary from './Summary';
import {IProject} from '../../api/projects';
import {
  transition,
  color1,
  color3,
} from '../../misc/styles';

const wrapperStyle = () => ({
  ...transition,
  'width': '100%',
  'marginBottom': '15px',
  'borderBottom': `1px solid ${color3}`,
  ':hover': {
    'borderBottom': `1px solid ${color1}`,
  },
});

const linkStyle = () => ({
  'color': 'black',
  'textDecoration': 'none',
});

const fullWidth = () => ({
  'width': '100%',
});

interface IProps {
  project: IProject;
};

const Project: React.FunctionComponent<IProps> = ({
  project,
}) => (
  <div style={wrapperStyle()}>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={project.url}
      style={linkStyle()}>
      <H2>{project.title}</H2>
      <div style={fullWidth()}>
        <img style={fullWidth()} src={project.img_src}/>
      </div>
      <Summary>{project.description}</Summary>
    </a>
  </div>
);

export default Project;
