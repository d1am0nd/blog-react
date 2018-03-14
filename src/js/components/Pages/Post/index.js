import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import marked from 'marked';
import PropTypes from 'prop-types';

import renderer from 'markdown/renderer';

import {fetchPostBySlug} from 'store/actions/postsActions';
import {Meta} from 'meta/meta';
import {pretty as prettyDate} from 'filters/date';
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
        .fetchPostBySlug(this.props.match.params.slug)
        .then((data) => {
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

Show.propTypes = {
  match: PropTypes.object,
  post: PropTypes.object,
  dataLoaded: PropTypes.bool.isRequired,
  fetchPostBySlug: PropTypes.func.isRequired,
  location: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    post: state.posts.post,
    dataLoaded: state.misc.dataLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostBySlug: (slug) => dispatch(fetchPostBySlug(slug)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(Show));
