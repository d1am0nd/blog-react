import React from 'react';
import radium from 'radium';

import Title from './Title';
import Summary from './Summary';

import {
  projectWrapper as wrapperStyle,
  projectWrapperLink as linkStyle,
  imgWrapper as imgWrapperStyle,
  img as imgStyle,
} from '../../../styles/projects';

class Project extends React.Component {
  render() {
    return (
      <div style={wrapperStyle()}>
        <a target="_blank" href={this.props.project.url} style={linkStyle()}>
          <Title text={this.props.project.title}/>
          <div style={imgWrapperStyle()}>
            <img style={imgStyle()} src={this.props.project.img_src}/>
          </div>
          <Summary text={this.props.project.description}/>
        </a>
      </div>
    );
  }
}
export default radium(Project);
