import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {pretty as prettyDate} from 'filters/date';
import {Meta, defaultTitle, defaultDescription} from 'meta/meta';
import {fetchPosts} from 'store/actions/postsActions';
import H1 from 'components/Simple/H1';
import Preview from 'components/Containers/Post/Preview';

class Index extends React.Component {
  static fetchData(store) {
    return store.dispatch(fetchPosts());
  }

  componentDidMount() {
    if (this.props.dataLoaded) {
      this.props.dispatch(fetchPosts())
        .then(data => {
          Meta.setTitle(defaultTitle);
          Meta.setDescription(defaultDescription);
        });
    }
  }

  renderPosts() {
    return this
      .props
      .posts
      .map(i => {
        return (
          <Preview post={i} key={i.id}/>
        );
      });
  }

  render() {
    return (
      <div>
        <H1>Home</H1>
        {this.renderPosts()}
      </div>
    );
  }
}

export default connect(state => {
  return {
    posts: state.posts.posts,
    dataLoaded: state.misc.dataLoaded,
  };
})(radium(Index));
