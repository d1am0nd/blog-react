import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import postApi from '../../api/posts';
import {fetchPosts} from '../../store/actions/postsActions';

import {Link} from 'react-router-dom';

class Index extends React.Component {
  static fetchData(store) {
    return store.dispatch(fetchPosts());
  }

  componentDidMount() {
    if (this.props.dataLoaded) {
      this.props.dispatch(fetchPosts());
    }
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

  moreStyle() {
    return {
      fontSize: '18px',
    };
  }

  wrapperStyle() {
    return {
      'transition': '0.2s',
      'border': '1px solid white',
      'marginBottom': '15px',
    };
  }

  renderPosts() {
    return this
      .props
      .posts
      .map(i => {
        return (
          <Link
            style={this.linkStyle()}
            to={'/posts/' + i.slug}
            key={i.id}>
            <div
              key={i.id}
              style={this.wrapperStyle()}>
              <h2 style={this.titleStyle()}>{i.title}</h2>
              <p style={this.summaryStyle()}>
                {i.summary}
              </p>
              <span style={this.moreStyle()} href="#">
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
