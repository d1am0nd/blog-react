import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Meta} from '@/meta/meta';

const setsMeta = (WrappedComponent, getTitle, getDesc) => {
  class SetsMeta extends React.Component {
    componentDidMount() {
      const {title, description} = this.props;
      console.log(Meta);
      console.log(title, description);
      Meta.setTitle(title);
      Meta.setDescription(description);
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}/>
      );
    }
  }

  SetsMeta.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  const mapStateToProps = (state) => {
    return {
      title: getTitle(state),
      description: getDesc(state),
    };
  };

  return connect(mapStateToProps)(SetsMeta);
};

export default setsMeta;
