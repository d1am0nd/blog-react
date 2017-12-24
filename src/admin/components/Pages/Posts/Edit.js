import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import Title from '../../Partials/Title';
import PostForm from '../../Forms/PostForm';

import {fetchPostBySlug, updatePost} from '../../../store/actions/postsActions';

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    this
      .props
      .dispatch(fetchPostBySlug(this.props.match.params.slug))
      .then(res => {
        this.setState({
          post: res,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  postChanged(post) {
    // TODO show on right
  }

  handleSubmit(e, post) {
    e.preventDefault();
    this.props.dispatch(updatePost(post));
  }

  renderForm() {
    if (typeof this.state.post.id !== 'undefined') {
      return (
        <PostForm
          postChanged={post => this.postChanged(post)}
          handleSubmit={(e, post) => this.handleSubmit(e, post)}
          post={this.props.post}/>
      );
    }
    return '';
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
        <Title text={this.props.post.title}/>
        <div style={this.fifty()}>
          {this.renderForm()}
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
