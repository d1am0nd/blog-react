import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import Label from './Parts/Label';
import Title from './Parts/Title';

import {
  wrapper as wrapperStyle,
  textarea as inputStyle,
} from 'admin/styles/form/form';

class TextArea extends React.Component {
  render() {
    const {
      title,
      label,
      inputProps,
      handleChange,
    } = this.props;
    return (
      <div style={wrapperStyle()}>
        {title ? <Title text={title}/> : null}
        {label ? <Label text={label}/> : null}
        <textarea
          {...inputProps}
          style={inputStyle()}
          onChange={(e) => handleChange(e)}></textarea>
      </div>
    );
  }
}

TextArea.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  inputProps: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
};

export default radium(TextArea);
