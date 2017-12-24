import React from 'react';
import radium from 'radium';

import {
  left as leftStyle,
  right as rightStyle,
  li as liStyle,
  ul as ulStyle,
} from '../../styles/index/row';

class Row extends React.Component {
  handleDelete(e) {
    if (this.props.handleDelete) {
      this.props.handleDelete(e);
    }
  }
  render() {
    return (
      <div>
        <div style={leftStyle()}>
          <ul style={ulStyle()}>
            <li style={liStyle()}>
              <a href={this.props.editUrl}>
                Edit
              </a>
            </li>
            <li style={liStyle()}>
              <a href="javascript:;" onClick={(e) => this.handleDelete(e)}>
                Delete
              </a>
            </li>
          </ul>
        </div>
        <div style={rightStyle()}>
          - {this.props.text}
        </div>
      </div>
    );
  }
}

export default radium(Row);
