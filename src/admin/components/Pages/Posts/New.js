import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import Title from '../../Partials/Title';
import PostForm from '../../Forms/PostForm';
import Render from '../../Renders/Post';

import {newPost} from '../../../store/actions/postsActions';

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
        <Title text={`New post`}/>
        <div style={{'float': 'left', 'width': '45%'}}>
          <PostForm
            postChanged={post => this.postChanged(post)}
            handleSubmit={(e, post) => this.handleSubmit(e, post)}/>
        </div>
        <div style={{'float': 'right', 'width': '50%'}}>
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
