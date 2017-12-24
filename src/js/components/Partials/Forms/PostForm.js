import React from 'react';
import radium from 'radium';

import helpers from '../../../helpers/index';
import {
  input as inputStyle,
  formGroup as formGroupStyle,
  smallText as smallTextStyle,
} from '../../../styles/form';

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
    };

    if (props.post) {
      Object.assign(post, props.post);
    }

    this.state = {
      post: post,
    };
  }

  componentDidMount(prevProps) {
    if (prevProps && this.props &&
      prevProps.post != this.props.post) {
      this.setState({
        post: this.props.post,
      });
    }
  }

  active() {
    if (helpers.validateYyyyMmDd(this.state.post.published_at.String)) {
      return true;
    }
    return false;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.handleSubmit) {
      this.props.handleSubmit(e, this.state.post);
    }
  }

  handleValueChange(e, attr) {
    let post = this.state.post;

    if (attr === 'title') {
      post[attr] = e.target.value;
      post['slug'] = helpers.slugify(e.target.value);
    } else if (attr === 'published_at') {
      post.published_at.String = e.target.value;
    } else {
      post[attr] = e.target.value;
    }
    this.setState({
      post: post,
    });
    if (this.props.handleValueChange) {
      this.props.handleValueChange(e, attr);
    }
  }

  render() {
    return (
      <form
        onSubmit={e => this.handleSubmit(e)}>
        <div
          style={formGroupStyle()}>
          <label>Title</label>
          <input
            style={smallTextStyle()}
            onChange={e => this.handleValueChange(e, 'title')}
            autoFocus="true"
            value={this.state.post.title}
            type="text"/>
        </div>
        <div
          style={formGroupStyle()}>
          <label>Slug</label>
          <input
            style={smallTextStyle()}
            onChange={e => this.handleValueChange(e, 'slug')}
            value={this.state.post.slug}
            type="text"/>
        </div>
        <div
          style={formGroupStyle()}>
          <label>Summary</label>
          <textarea
            value={this.state.post.summary}
            style={inputStyle()}
            onChange={e => this.handleValueChange(e, 'summary')}
            ></textarea>
        </div>
        <div
          style={formGroupStyle()}>
          <label>Content</label>
          <textarea
            rows="20"
            value={this.state.post.content}
            style={inputStyle()}
            onChange={e => this.handleValueChange(e, 'content')}
            ></textarea>
        </div>
        <div
          style={formGroupStyle()}>
          <label>Published at</label>
          <input
            disabled="true"
            type="checkbox"
            checked={this.active()}
            value={this.state.post.active}
            onChange={e => this.handleValueChange(e, 'active')}
            />
          <input
            style={smallTextStyle()}
            placeholder="YYYY-MM-DD"
            type="text"
            value={this.state.post.published_at.String}
            onChange={e => this.handleValueChange(e, 'published_at')}/>
        </div>
        <div
          style={formGroupStyle()}>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default radium(PostForm);
