import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

class SmallTextInput extends React.Component {
  render() {
    const {inputProps, handleChange} = this.props;
    return (
      <input
        {...inputProps}
        onChange={(e) => handleChange(e)}/>
    );
  }
}

SmallTextInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  inputProps: PropTypes.object,
};

export default radium(SmallTextInput);
