import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import marked from 'marked';
import renderer from '../../marked/renderer';

import {fetchPostBySlug} from '../../store/actions/postsActions';

import {Link} from 'react-router-dom';

import {
  title as titleStyle,
  summary as summaryStyle,
  content as contentStyle,
  wrapper as wrapperStyle,
  showMore as linkStyle,
} from '../../styles/post';
import meta from '../../meta/meta';

class Show extends React.Component {
  static fetchData(store, url) {
    let split = url.split('/');
    let slug = split[split.length - 1];
    return store.dispatch(fetchPostBySlug(slug));
  }

  componentDidMount() {
    this.fetchPost();
  }

  componentWillUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchPost();
    }
  }

  fetchPost() {
    if (this.props.dataLoaded) {
      this.props.dispatch(fetchPostBySlug(this.props.match.params.slug));
    }
  }

  content() {
    if (!this.props.post.content) {
      return;
    }
    return marked(
      this
        .props
        .post
        .content,
      {renderer: renderer, sanitize: true}
    );
  }

  render() {
    return (
      <div
        key={this.props.post.id}
        style={wrapperStyle()}>
        <h2 style={titleStyle()}>{this.props.post.title}</h2>
        <p style={summaryStyle()}>
          {this.props.post.summary}
        </p>
        <div
          style={contentStyle()}
          dangerouslySetInnerHTML={{__html: this.content()}}>
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    post: state.posts.post,
    dataLoaded: state.misc.dataLoaded,
  };
})(radium(Show));
