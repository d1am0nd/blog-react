import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import PostForm from '../../Partials/Forms/PostForm';

import {newPost} from '../../../store/actions/postsActions';

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
    this.props.dispatch(newPost(data));
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

export default connect(state => {
  return {

  };
})(radium(NewPost));
