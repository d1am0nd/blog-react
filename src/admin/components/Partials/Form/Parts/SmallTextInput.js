import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

class SmallTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type ? props.type : 'text',
    };
  }
  render() {
    return (
      <input
        type={this.state.type}
        value={this.props.value}
        onChange={(e) => this.props.handleChange(e)}/>
    );
  }
}

SmallTextInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
};

export default radium(SmallTextInput);
