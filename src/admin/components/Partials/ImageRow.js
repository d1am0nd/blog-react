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
        <Link to={this.props.editUrl}>
          <div>
            {this.props.text}
          </div>
          <img src={this.props.src}/>
        </Link>
        <div onClick={e => this.props.handleDelete(e)}>
          <a href="javascript:;">Delete</a>
        </div>
      </div>
    );
  }
}

export default radium(ImageRow);
