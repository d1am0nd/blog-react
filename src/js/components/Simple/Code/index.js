import React, {Component} from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';
import 'highlight.js/styles/monokai.css';

import {codeStyle} from './styles';

class Code extends Component {
  render() {
    const {
      children,
      renderHtml,
    } = this.props;
    return (
      <pre>
        {renderHtml ?
          <code
            style={codeStyle()}
            dangerouslySetInnerHTML={{__html: children}}/> :
          <code
            style={codeStyle()}>
            {children}
          </code>}
      </pre>
    );
  }
}

Code.propTypes = {
  children: PropTypes.node,
  renderHtml: PropTypes.bool,
};

export default radium(Code);
