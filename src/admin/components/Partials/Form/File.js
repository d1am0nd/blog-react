import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import Label from './Parts/Label';
import Title from './Parts/Title';

import {
  smallWrapper as wrapperStyle,
} from '../../../styles/form/form';

class File extends React.Component {
  handleChange(e) {
    if (this.props.handleChange) {
      this.props.handleChange(e);
    }
  }

  renderTitle() {
    return this.props.title ?
      <Title text={this.props.title}/> :
      null;
  }

  renderLabel() {
    return this.props.label ?
      <Label text={this.props.label}/> :
      null;
  }

  render() {
    return (
      <div style={wrapperStyle()}>
        {this.renderTitle()}
        {this.renderLabel()}
        <input
          accept="image/*"
          type="file"
          onChange={(e) => this.handleChange(e)}/>
      </div>
    );
  }
}

File.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func,
};

export default radium(File);
