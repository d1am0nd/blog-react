import React from 'react';
import radium from 'radium';

import PostForm from '../../Partials/Forms/PostForm';

import postApi from '../../../api/posts';

import helpers from '../../../helpers/index';

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    this.fetchPost();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchPost();
    }
  }

  onRouteChanged() {
    this.fetchPost();
  }

  fetchPost() {
    postApi
      .findBySlug(this.props.match.params.slug)
      .then(res => {
        this.setState({
          post: res.data,
        });
      });
  }

  handleSubmit(e, data) {
    if (!helpers.validateYyyyMmDd(data.published_at.String)) {
      data.published_at.String = '';
      data.published_at.Valid = false;
    } else {
      data.published_at.Valid = true;
    }
    postApi
      .update(data)
      .then(res => {
        alert('Sucessfully updated post');
      });
  }

  renderForm() {
    if (!this.state.post.id) {
      return;
    }
    return (
      <PostForm
        post={this.state.post}
        handleSubmit={(e, data) => this.handleSubmit(e, data)}/>
    );
  }

  render() {
    return (
      <div>
        <h2>{this.state.post.title}</h2>
        {this.renderForm()}
      </div>
    );
  }
}

export default radium(Edit);
