import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import SmallText from '../Partials/Form/SmallText';
import TextArea from '../Partials/Form/TextArea';
import Submit from '../Partials/Form/Submit';

import {slugify, validateYyyyMmDd} from '../../helpers';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: props.post,
    };
  }

  handleTitleChange({target}) {
    const {value} = target;
    const slug = slugify(value);
    this.handleChange('title', value);
    this.handleChange('slug', slug);
  }

  handlePublishedAtChanged({target}) {
    const {value} = target;
    const valid = validateYyyyMmDd(value);
    this.handleChange('active', valid);
    this.handleChange('published_at', value);
  }

  handleChange(key, val) {
    const {post} = this.state;
    post[key] = val;
    this.setState({
      post: post,
    });
    this.props.postChanged(post);
  }

  render() {
    const {post} = this.state;
    return (
      <form onSubmit={(e) => this.props.handleSubmit(e, post)}>
        <SmallText
          inputProps={{
            value: post.title,
            name: 'title',
          }}
          handleChange={(e) => this.handleTitleChange(e)}
          title="Title"/>
        {post.slug}
        <TextArea
          inputProps={{
            value: post.summary,
            rows: 5,
            name: 'summary',
          }}
          handleChange={(e) => this.handleChange('summary', e.target.value)}
          title="Summary"/>
        <TextArea
          inputProps={{
            value: post.content,
            rows: 20,
            name: 'content',
          }}
          handleChange={(e) => this.handleChange('content', e.target.value)}
          title="Content"/>
        <div>
          <label>Published at</label>
          <input
            disabled="true"
            name="active"
            type="checkbox"
            checked={post.active}
            value={post.active}
            onChange={(e) => this.handleChange('active', e.target.value)}/>
          <input
            placeholder="YYYY-MM-DD"
            type="text"
            value={post.published_at}
            onChange={(e) => this.handlePublishedAtChanged(e)}/>
        </div>
        <Submit text="Submit"/>
      </form>
    );
  }
}

PostForm.propTypes = {
  post: PropTypes.object.isRequired,
  postChanged: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default radium(PostForm);
