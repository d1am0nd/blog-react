import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import H1 from 'components/Simple/H1';
import Post from 'components/Containers/Post/Full';
import PostForm from '../../Forms/PostForm';

import {newPost} from '../../../store/actions/postsActions';
import {
  left as leftStyle,
  right as rightStyle,
} from '../../../styles/show/show';

class Edit extends React.Component {
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
    this.props.dispatch(newPost(post));
  }

  render() {
    return (
      <div>
        <H1>{`New post`}</H1>
        <div style={leftStyle()}>
          <PostForm
            postChanged={post => this.postChanged(post)}
            handleSubmit={(e, post) => this.handleSubmit(e, post)}/>
        </div>
        <div style={rightStyle()}>
          <Render post={this.state.post}/>
        </div>
        <div style={{'clear': 'both'}}></div>
      </div>
    );
  }
}

export default connect(store => {
  return {
    post: store.posts.post,
  };
})(radium(Edit));
