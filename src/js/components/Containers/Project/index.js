import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import H2 from '@/components/Simple/H2';
import Summary from '@/components/Simple/Summary';

import {
  wrapperStyle,
  linkStyle,
  imgWrapperStyle,
  imgStyle,
} from './styles';

class Project extends React.Component {
  render() {
    const {project} = this.props;
    return (
      <div style={wrapperStyle()}>
        <a target="_blank" href={project.url} style={linkStyle()}>
          <H2>{project.title}</H2>
          <div style={imgWrapperStyle()}>
            <img style={imgStyle()} src={project.img_src}/>
          </div>
          <Summary>{project.description}</Summary>
        </a>
      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default radium(Project);
