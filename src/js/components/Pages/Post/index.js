import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getPost} from '@/store/selectors/posts';
import Post from '@/components/Containers/Post/Full';

class Project extends React.Component {
  render() {
    return (
      <Post post={this.props.post}/>
    );
  }
}

Project.propTypes = {
  post: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    post: getPost(state),
  };
};

export default connect(
  mapStateToProps,
)(radium(Project));
