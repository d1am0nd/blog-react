import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import Title from '../../Partials/Title';
import PostForm from '../../Forms/PostForm';

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
    // TODO show on right
  }

  handleSubmit(e, post) {
    e.preventDefault();
    this.props.dispatch(newPost(post));
  }

  fifty() {
    return {
      'width': '50%',
      'display': 'inline-block',
    };
  }

  render() {
    return (
      <div>
        <Title text={`New post`}/>
        <div style={this.fifty()}>
          <PostForm
            postChanged={post => this.postChanged(post)}
            handleSubmit={(e, post) => this.handleSubmit(e, post)}/>
        </div>
        <div style={this.fifty()}>
          2
        </div>
      </div>
    );
  }
}

export default connect(store => {
  return {
    post: store.posts.post,
  };
})(radium(Edit));
