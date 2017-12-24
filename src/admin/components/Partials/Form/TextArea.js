import React from 'react';
import radium from 'radium';

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
    if (!this.props.rows) {
      return 20;
    }
    return this.props.rows;
  }

  renderTitle() {
    if (!this.props.title) {
      return '';
    }
    return <Title text={this.props.title}/>;
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
          onChange={e => this.handleChange(e)}
          ></textarea>
      </div>
    );
  }
}

export default radium(TextArea);
