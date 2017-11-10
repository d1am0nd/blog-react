import React from 'react';
import radium from 'radium';

import PostForm from '../../Partials/Forms/PostForm';

import postApi from '../../../api/posts';

import helpers from '../../../helpers/index';

class NewPost extends React.Component {
  constructor() {
    super();
  }

  handleSubmit(e, data) {
    if (!helpers.validateYyyyMmDd(data.published_at.String)) {
      data.published_at.String = '';
      data.published_at.Valid = false;
    } else {
      data.published_at.Valid = true;
    }
    postApi
      .new(data)
      .then(res => {
        alert('Sucessfully updated post');
      });
  }

  render() {
    return (
      <div>
        <h2>New post</h2>
        <PostForm
          handleSubmit={(e, data) => this.handleSubmit(e, data)}/>
      </div>
    );
  }
}

export default radium(NewPost);
