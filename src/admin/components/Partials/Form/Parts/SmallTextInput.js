import React from 'react';
import radium from 'radium';

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
        onChange={e => this.props.handleChange(e)}/>
    );
  }
}

export default radium(SmallTextInput);
