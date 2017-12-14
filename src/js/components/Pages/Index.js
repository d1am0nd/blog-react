import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {
  title as titleStyle,
  date as dateStyle,
  summary as summaryStyle,
  content as contentStyle,
  indexWrapper as wrapperStyle,
  wrapperLink as linkStyle,
  showMore as moreStyle,
  hr as hrStyle,
} from '../../styles/post';
import {pretty as prettyDate} from '../../filters/date';
import postApi from '../../api/posts';
import {Meta, defaultTitle, defaultDescription} from '../../meta/meta';
import {fetchPosts} from '../../store/actions/postsActions';

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
        const date = prettyDate(i.published_at.String);
        return (
          <Link
            style={linkStyle()}
            to={'/posts/' + i.slug}
            key={i.id}>
            <div
              key={`wrapper-${i.id}`}
              style={wrapperStyle()}>
              <h2 style={titleStyle()}>{i.title}</h2>
              <div style={dateStyle()}>Published on {date}</div>
              <p style={summaryStyle()}>
                {i.summary}
              </p>
              <span style={moreStyle()} key={`goto-${i.id}}`} href="#">
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
