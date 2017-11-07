import React from 'react';
import radium from 'radium';

import postApi from '../../api/posts';

import marked from 'marked';
import renderer from '../../marked/renderer';

import {Link} from 'react-router-dom';

import meta from '../../meta/meta';

class Show extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    this.fetchPost();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    this.fetchPost();
  }

  fetchPost() {
    postApi
      .findBySlug(this.props.match.params.slug)
      .then(res => {
        meta.setTitle(res.data.title);
        meta.setDescription(res.data.summary);
        this.setState({
          post: res.data,
        });
      });
  }

  content() {
    if (!this.state.post.content) {
      return;
    }
    return marked(
      this
        .state
        .post
        .content,
      {renderer: renderer, sanitize: true}
    );
  }

  linkStyle() {
    return {
      'color': 'black',
      'textDecoration': 'none',
    };
  }

  titleStyle() {
    return {
      marginTop: 0,
    };
  }

  summaryStyle() {
    return {
      fontSize: '18px',
      marginTop: 0,
      marginBottom: 0,
    };
  }

  contentStyle() {
    return {
      fontSize: '16px',
      marginTop: 0,
      marginBottom: 0,
    };
  }

  wrapperStyle() {
    return {
      'transition': '0.2s',
      'border': '1px solid white',
    };
  }

  render() {
    return (
      <div
        key={this.state.post.id}
        style={this.wrapperStyle()}>
        <h2 style={this.titleStyle()}>{this.state.post.title}</h2>
        <p style={this.summaryStyle()}>
          {this.state.post.summary}
        </p>
        <div
          style={this.contentStyle()}
          dangerouslySetInnerHTML={{__html: this.content()}}>
        </div>
      </div>
    );
  }
}

export default radium(Show);
