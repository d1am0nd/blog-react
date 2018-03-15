import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import SmallText from './Form/SmallText';

import {
  wrapper as wrapperStyle,
} from '../../styles/index/search';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: props.value,
    };
  }
  render() {
    return (
      <div>
        <div style={wrapperStyle()}>
          <SmallText
            text={`Search`}
            value={this.props.value}
            handleChange={(e) => this.props.handleChange(e)}/>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default radium(Search);
