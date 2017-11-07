import React from 'react';
import radium from 'radium';

import helpers from '../../../helpers/index';

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

  formGroupStyle() {
    return {
      width: '100%',
      marginBottom: '5px',
    };
  }

  inputStyle() {
    return {
      width: '100%',
      display: 'block',
    };
  }

  smallTextStyle() {
    let style = {};
    Object.assign(style, this.inputStyle());
    Object.assign(style, {
      'maxWidth': '200px',
    });
    return style;
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
          style={this.formGroupStyle()}>
          <label>Title</label>
          <input
            style={this.smallTextStyle()}
            onChange={e => this.handleValueChange(e, 'title')}
            autoFocus="true"
            value={this.state.post.title}
            type="text"/>
        </div>
        <div
          style={this.formGroupStyle()}>
          <label>Slug</label>
          <input
            style={this.smallTextStyle()}
            onChange={e => this.handleValueChange(e, 'slug')}
            value={this.state.post.slug}
            type="text"/>
        </div>
        <div
          style={this.formGroupStyle()}>
          <label>Summary</label>
          <textarea
            style={this.inputStyle()}
            onChange={e => this.handleValueChange(e, 'summary')}
            >{this.state.post.summary}</textarea>
        </div>
        <div
          style={this.formGroupStyle()}>
          <label>Content</label>
          <textarea
            rows="20"
            style={this.inputStyle()}
            onChange={e => this.handleValueChange(e, 'content')}
            >{this.state.post.content}</textarea>
        </div>
        <div
          style={this.formGroupStyle()}>
          <label>Published at</label>
          <input
            disabled="true"
            type="checkbox"
            checked={this.active()}
            value={this.state.post.active}
            onChange={e => this.handleValueChange(e, 'active')}
            />
          <input
            style={this.smallTextStyle()}
            placeholder="YYYY-MM-DD"
            type="text"
            value={this.state.post.published_at.String}
            onChange={e => this.handleValueChange(e, 'published_at')}/>
        </div>
        <div
          style={this.formGroupStyle()}>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default radium(PostForm);
