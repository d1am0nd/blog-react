import React from 'react';
import radium from 'radium';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

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
              <Link to={this.props.editUrl}>
                Edit
              </Link>
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

Row.propTypes = {
  handleDelete: PropTypes.func,
  editUrl: PropTypes.string,
  text: PropTypes.string,
};

export default radium(Row);
