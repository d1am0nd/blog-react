import React from 'react';
import radium from 'radium';
import {Link} from 'react-router-dom';

import {
  left as leftStyle,
  right as rightStyle,
  li as liStyle,
  ul as ulStyle,
} from '../../styles/index/row';

class ImageRow extends React.Component {
  handleDelete(e) {
    if (this.props.handleDelete) {
      this.props.handleDelete(e);
    }
  }
  render() {
    return (
      <div>
        {this.props.text}
        <img src={this.props.src}/>
      </div>
    );
  }
}

export default radium(ImageRow);
