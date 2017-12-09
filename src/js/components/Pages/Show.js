import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import marked from 'marked';
import renderer from '../../marked/renderer';

import {fetchPostBySlug} from '../../store/actions/postsActions';

import {Link} from 'react-router-dom';

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

  linkStyle() {
    return {
      'color': 'black',
      'textDecoration': 'none',
    };
  }

  titleStyle() {
    return {
      'marginBottom': '10px',
      'marginTop': 0,
    };
  }

  summaryStyle() {
    return {
      fontSize: '18px',
      marginTop: 0,
      marginBottom: '10px',
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
        key={this.props.post.id}
        style={this.wrapperStyle()}>
        <h2 style={this.titleStyle()}>{this.props.post.title}</h2>
        <p style={this.summaryStyle()}>
          {this.props.post.summary}
        </p>
        <div
          style={this.contentStyle()}
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
