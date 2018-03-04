import React from 'react';
import radium from 'radium';

import Title from './Title';
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
          <Title text={this.props.project.title}/>
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
