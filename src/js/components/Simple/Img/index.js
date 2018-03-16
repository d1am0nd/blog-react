import React, {Component} from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import {imgStyle} from './styles';

class Img extends Component {
  render() {
    const {src, alt, title} = this.props;
    return (
      <img
        style={imgStyle()}
        src={src}
        alt={alt ? alt : ''}
        title={title ? title : ''}/>
    );
  }
}

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
};

export default radium(Img);
