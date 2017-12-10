import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {
  title as titleStyle,
  summary as summaryStyle,
  content as contentStyle,
  wrapper as wrapperStyle,
  wrapperLink as linkStyle,
  showMore as moreStyle,
} from '../../styles/post';
import postApi from '../../api/posts';
import {fetchPosts} from '../../store/actions/postsActions';

class Index extends React.Component {
  static fetchData(store) {
    return store.dispatch(fetchPosts());
  }

  componentDidMount() {
    if (this.props.dataLoaded) {
      this.props.dispatch(fetchPosts());
    }
  }

  renderPosts() {
    return this
      .props
      .posts
      .map(i => {
        return (
          <Link
            style={linkStyle()}
            to={'/posts/' + i.slug}
            key={i.id}>
            <div
              key={i.id}
              style={wrapperStyle()}>
              <h2 style={titleStyle()}>{i.title}</h2>
              <p style={summaryStyle()}>
                {i.summary}
              </p>
              <span style={moreStyle()} href="#">
                More
              </span>
            </div>
          </Link>
        );
      });
  }

  render() {
    return (
      <div>
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
