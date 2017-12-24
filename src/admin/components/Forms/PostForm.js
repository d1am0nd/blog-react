import React from 'react';
import radium from 'radium';

import SmallText from '../Partials/Form/SmallText';
import TextArea from '../Partials/Form/TextArea';
import Submit from '../Partials/Form/Submit';

import {slugify} from '../../helpers';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    const post = {
      'published_at': {},
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
        <Submit text={`Submit`}/>
      </form>
    );
  }
}

export default radium(PostForm);
