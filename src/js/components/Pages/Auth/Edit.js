import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import PostForm from '../../Partials/Forms/PostForm';

import {
  fetchPostBySlug,
  updatePost,
} from '../../../store/actions/postsActions';

import helpers from '../../../helpers/index';

class Edit extends React.Component {
  componentWillMount() {
    this.fetchPost();
  }

  componentWillUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchPost();
    }
  }

  onRouteChanged() {
    this.fetchPost();
  }

  fetchPost() {
    this.props.dispatch(fetchPostBySlug(this.props.match.params.slug));
  }

  handleSubmit(e, data) {
    if (!helpers.validateYyyyMmDd(data.published_at.String)) {
      data.published_at.String = '';
      data.published_at.Valid = false;
    } else {
      data.published_at.Valid = true;
    }
    this.props.dispatch(updatePost(data));
  }

  renderForm() {
    if (!this.props.post.id) {
      return;
    }
    return (
      <PostForm
        post={this.props.post}
        handleSubmit={(e, data) => this.handleSubmit(e, data)}/>
    );
  }

  render() {
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        {this.renderForm()}
      </div>
    );
  }
}

export default connect(state => {
  return {
    post: state.posts.post,
  };
})(radium(Edit));
