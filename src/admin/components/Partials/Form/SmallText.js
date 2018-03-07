import React from 'react';
import radium from 'radium';

import Label from './Parts/Label';
import Title from './Parts/Title';
import SmallTextInput from './Parts/SmallTextInput';

import {
  smallWrapper as wrapperStyle,
} from '../../../styles/form/form';

class SmallText extends React.Component {
  handleChange(e) {
    if (this.props.handleChange) {
      this.props.handleChange(e);
    }
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
        <SmallTextInput
          type={this.props.type}
          value={this.props.value}
          handleChange={e => this.handleChange(e)}/>
      </div>
    );
  }
}

export default radium(SmallText);
