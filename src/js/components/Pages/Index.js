import React from 'react';
import radium from 'radium';

import postApi from '../../api/posts';

import {Link} from 'react-router-dom';

class Index extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };

    if (this.state.posts.length === 0) {
      postApi.getPublished()
        .then(res => {
          this.setState({
            posts: res.data,
          });
        });
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

  wrapperStyle() {
    return {
      'transition': '0.2s',
      'border': '1px solid white',
    };
  }

  renderPosts() {
    return this
      .state
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

export default radium(Index);
