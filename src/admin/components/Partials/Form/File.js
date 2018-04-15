import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import Label from './Parts/Label';
import Title from './Parts/Title';

import {
  smallWrapper as wrapperStyle,
} from 'admin/styles/form/form';

class File extends React.Component {
  handleChange(e) {
    this.props.handleChange(e);
  }

  render() {
    const {title, label} = this.props;
    return (
      <div style={wrapperStyle()}>
        {title ? <Title text={title}/> : null}
        {label ? <Label text={label}/> : null}
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
  handleChange: PropTypes.func.isRequired,
};

export default radium(File);
