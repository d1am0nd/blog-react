import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import H1 from '@/components/Simple/H1';
import Post from '@/components/Containers/Post/Full';
import PostForm from 'admin/components/Forms/PostForm';

import {findBySlug, update} from 'admin/api/posts';
import {
  left as leftStyle,
  right as rightStyle,
} from 'admin/styles/show/show';

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      post: {},
    };
  }

  componentDidMount() {
    findBySlug(this.props.match.params.slug)
      .then((res) => {
        this.setState({
          loaded: true,
          post: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  postChanged(post) {
    this.setState({
      post: post,
    });
  }

  handleSubmit(e, post) {
    e.preventDefault();
    update(post);
  }

  render() {
    const {post, loaded} = this.state;
    return (
      <div>
        <H1>{post.title}</H1>
        <div style={leftStyle()}>
          {loaded ?
            <PostForm
              postChanged={(post) => this.postChanged(post)}
              handleSubmit={(e, post) => this.handleSubmit(e, post)}
              post={post}/> : null}
        </div>
        <div style={rightStyle()}>
          <Post post={this.state.post}/>
        </div>
        <div style={{'clear': 'both'}}></div>
      </div>
    );
  }
}

Edit.propTypes = {
  match: PropTypes.object.isRequired,
};

export default radium(Edit);
