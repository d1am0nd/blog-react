import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import H1 from 'components/Simple/H1';
import Post from 'components/Containers/Post/Full';
import PostForm from '../../Forms/PostForm';

import {newPost} from '../../../store/actions/postsActions';
import {
  left as leftStyle,
  right as rightStyle,
} from '../../../styles/show/show';

class New extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {
        published_at: {},
      },
    };
  }

  postChanged(post) {
    this.setState({
      post: post,
    });
  }

  handleSubmit(e, post) {
    e.preventDefault();
    this.props.newPost(post);
  }

  render() {
    return (
      <div>
        <H1>{`New post`}</H1>
        <div style={leftStyle()}>
          <PostForm
            postChanged={(post) => this.postChanged(post)}
            handleSubmit={(e, post) => this.handleSubmit(e, post)}/>
        </div>
        <div style={rightStyle()}>
          <Post post={this.state.post}/>
        </div>
        <div style={{'clear': 'both'}}></div>
      </div>
    );
  }
}

New.propTypes = {
  post: PropTypes.object,
  newPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    post: state.posts.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newPost: (post) => dispatch(newPost(post)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(New));
