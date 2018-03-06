import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import marked from 'marked';

import renderer from 'markdown/renderer';

import {fetchPostBySlug} from 'store/actions/postsActions';
import {Meta} from 'meta/meta';
import {pretty as prettyDate} from 'filters/date';
import H1 from 'components/Simple/H1';
import Subtle from 'components/Simple/Subtle';
import Summary from 'components/Simple/Summary';
import Post from 'components/Containers/Post/Full';

class Show extends React.Component {
  static fetchData(store, url) {
    const split = url.split('/');
    const slug = split[split.length - 1];
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
      this
        .props
        .dispatch(fetchPostBySlug(this.props.match.params.slug))
        .then(data => {
          Meta.setTitle(data.title);
          Meta.setDescription(data.summary);
        });
    }
  }

  prettyDate() {
    if (this.props.post.published_at) {
      return prettyDate(this.props.post.published_at.String);
    }
    return '';
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
      <Post post={this.props.post}/>
    );
  }
}

export default connect(state => {
  return {
    post: state.posts.post,
    dataLoaded: state.misc.dataLoaded,
  };
})(radium(Show));
