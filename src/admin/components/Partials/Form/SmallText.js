import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import Label from './Parts/Label';
import Title from './Parts/Title';
import SmallTextInput from './Parts/SmallTextInput';

import {
  smallWrapper as wrapperStyle,
} from 'admin/styles/form/form';

class SmallText extends React.Component {
  render() {
    const {title, label, handleChange, inputProps} = this.props;
    return (
      <div style={wrapperStyle()}>
        {title ? <Title text={title}/> : null}
        {label ? <Label text={label}/> : null}
        <SmallTextInput
          inputProps={inputProps}
          handleChange={(e) => handleChange(e)}/>
      </div>
    );
  }
}

SmallText.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  inputProps: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
};

export default radium(SmallText);
