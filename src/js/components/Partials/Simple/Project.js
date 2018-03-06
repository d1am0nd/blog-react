import React from 'react';
import radium from 'radium';

import H2 from 'components/Simple/H2';
import Summary from 'components/Simple/Summary';

import {
  projectWrapper as wrapperStyle,
  projectWrapperLink as linkStyle,
  imgWrapper as imgWrapperStyle,
  img as imgStyle,
} from 'styles/projects';

class Project extends React.Component {
  render() {
    return (
      <div style={wrapperStyle()}>
        <a target="_blank" href={this.props.project.url} style={linkStyle()}>
          <H2>{this.props.project.title}</H2>
          <div style={imgWrapperStyle()}>
            <img style={imgStyle()} src={this.props.project.img_src}/>
          </div>
          <Summary>{this.props.project.description}</Summary>
        </a>
      </div>
    );
  }
}
export default radium(Project);
