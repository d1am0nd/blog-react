import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {dataLoaded} from '@/store/selectors/misc';

const fetchesData = (WrappedComponent, fetchMethod) => {
  class FetchesData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: props.dataLoaded,
      };
    }

    fetchData() {
      const {dispatch, match, dataLoaded} = this.props;
      const {params} = match;

      if (!dataLoaded) return;

      this.setState({isLoading: true});

      dispatch(fetchMethod(params))
        .then((res) => {
          this.setState({
            isLoading: false,
          });
        })
        .catch((res) => {
          this.setState({
            isLoading: false,
          });
        });
    }

    componentDidMount() {
      this.fetchData();
    }

    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        this.fetchData();
      }
    }

    render() {
      return (
        !this.state.isLoading || typeof window === 'undefined' ?
          <WrappedComponent
            {...this.props}
          /> : <div>Loading</div>
      );
    }
  }

  FetchesData.propTypes = {
    match: PropTypes.object,
    location: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    dataLoaded: PropTypes.bool.isRequired,
  };

  const mapStateToProps = (state) => {
    return {
      dataLoaded: dataLoaded(state),
    };
  };

  return withRouter(connect(mapStateToProps)(FetchesData));
};

export default fetchesData;
