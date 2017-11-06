import React from 'react';
import radium from 'radium';

import postApi from '../../api/posts';

import {Link} from 'react-router-dom';

class Show extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    };

    postApi
      .findBySlug(this.props.match.params.slug)
      .then(res => {
        this.setState({
          post: res.data,
        });
      });
    console.log(this.props);
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
      ':hover': {
        border: '1px solid black',
      },
    };
  }

  render() {
    return (
      <div
        key={this.state.post.id}
        style={this.wrapperStyle()}>
        <h2 style={this.titleStyle()}>{this.state.post.title}</h2>
        <p style={this.summaryStyle()}>
          {this.state.post.summary}
        </p>
        <p style={this.contentStyle()}>
          {this.state.post.content}
        </p>
      </div>
    );
  }
}

export default radium(Show);
