import React from 'react';
import radium from 'radium';

import SmallText from '../Partials/Form/SmallText';
import TextArea from '../Partials/Form/TextArea';
import Submit from '../Partials/Form/Submit';

import {slugify, validateYyyyMmDd} from '../../helpers';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    let post = {
      'title': '',
      'slug': '',
      'description': '',
      'content': '',
      'published_at': {
        'String': '',
        'Valid': false,
      },
      'active': false,
    };
    if (props.post) {
      Object.assign(post, props.post);
    }

    this.state = {
      post: post,
    };
  }

  handleTitleChange(e) {
    this.handleChange('title', e.target.value);
    this.handleChange('slug', slugify(e.target.value));
  }

  handlePublishedAtChanged(e) {
    this.handleChange('published_at', {
      Valid: validateYyyyMmDd(e.target.value),
      String: e.target.value,
    });
    this.handleChange('active', validateYyyyMmDd(e.target.value));
  }

  handleChange(key, val) {
    const post = this.state.post;
    post[key] = val;
    this.setState({
      post: post,
    });
    if (this.props.postChanged) {
      this.props.postChanged(post);
    }
  }

  render() {
    return (
      <form onSubmit={e => this.props.handleSubmit(e, this.state.post)}>
        <SmallText
          value={this.state.post.title}
          handleChange={e => this.handleTitleChange(e)}
          title={`Title`}/>
        {this.state.post.slug}
        <TextArea
          value={this.state.post.summary}
          rows={5}
          handleChange={e => this.handleChange('summary', e.target.value)}
          title={`Summary`}/>
        <TextArea
          value={this.state.post.content}
          rows={20}
          handleChange={e => this.handleChange('content', e.target.value)}
          title={`Content`}/>
        <div>
          <label>Published at</label>
          <input
            disabled="true"
            type="checkbox"
            checked={this.state.post.active}
            value={this.state.post.active}
            onChange={e => this.handleChange(e, 'active')}
            />
          <input
            placeholder="YYYY-MM-DD"
            type="text"
            value={this.state.post.published_at.String}
            onChange={e => this.handlePublishedAtChanged(e, 'published_at')}/>
        </div>
        <Submit text={`Submit`}/>
      </form>
    );
  }
}

export default radium(PostForm);
