import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import Label from './Parts/Label';
import Title from './Parts/Title';

import {
  wrapper as wrapperStyle,
  textarea as inputStyle,
} from '../../../styles/form/form';

class TextArea extends React.Component {
  handleChange(e) {
    if (this.props.handleChange) {
      this.props.handleChange(e);
    }
  }

  rows() {
    return this.props.rows ?
      this.props.rows : 20;
  }

  renderTitle() {
    return this.props.title ?
      <Title text={this.props.title}/> :
      null;
  }

  renderLabel() {
    if (!this.props.label) {
      return '';
    }
    return <Label text={this.props.label}/>;
  }

  render() {
    return (
      <div style={wrapperStyle()}>
        {this.renderTitle()}
        {this.renderLabel()}
        <textarea
          rows={this.rows()}
          value={this.props.value}
          style={inputStyle()}
          onChange={(e) => this.handleChange(e)}></textarea>
      </div>
    );
  }
}

TextArea.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  rows: PropTypes.number,
  handleChange: PropTypes.func,
};

export default radium(TextArea);
