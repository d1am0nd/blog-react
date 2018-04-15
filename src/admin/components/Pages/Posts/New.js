import React from 'react';
import radium from 'radium';

import H1 from '@/components/Simple/H1';
import Post from '@/components/Containers/Post/Full';
import PostForm from 'admin/components/Forms/PostForm';

import {newPost} from 'admin/api/posts';
import {
  left as leftStyle,
  right as rightStyle,
} from 'admin/styles/show/show';

class New extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {
        active: false,
        title: '',
        summary: '',
        content: '',
        published_at: {
          String: '',
          valid: false,
        },
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
    newPost(post)
      .then((res) => {
        alert('Success');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {post} = this.state;
    return (
      <div>
        <H1>New post</H1>
        <div style={leftStyle()}>
          <PostForm
            post={post}
            postChanged={(post) => this.postChanged(post)}
            handleSubmit={(e, post) => this.handleSubmit(e, post)}/>
        </div>
        <div style={rightStyle()}>
          <Post post={post}/>
        </div>
        <div style={{'clear': 'both'}}></div>
      </div>
    );
  }
}

export default radium(New);
