import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {
  wrapperStyle,
  linkStyle,
  moreStyle,
} from './styles';
import {pretty as prettyDate} from 'filters/date';
import {Meta, defaultTitle, defaultDescription} from 'meta/meta';
import {fetchPosts} from 'store/actions/postsActions';
import H1 from 'components/Simple/H1';
import H2 from 'components/Simple/H2';
import Subtle from 'components/Simple/Subtle';
import Title from 'components/Partials/Simple/Title';
import Summary from 'components/Simple/Summary';

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
              style={wrapperStyle()}>
              <H2>{i.title}</H2>
              <Subtle>Published by Dev Kordeš on {date}</Subtle>
              <Summary>{i.summary}</Summary>
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
