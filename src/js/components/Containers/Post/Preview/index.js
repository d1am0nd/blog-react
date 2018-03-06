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
import H2 from 'components/Simple/H2';
import Subtle from 'components/Simple/Subtle';
import Summary from 'components/Simple/Summary';

class Preview extends React.Component {
  render() {
    return (
      <Link
        style={linkStyle()}
        to={'/posts/' + this.props.post.slug}
        key={this.props.post.id}>
        <div
          style={wrapperStyle()}>
          <H2>{this.props.post.title}</H2>
          <Subtle>
            Published by Dev Kordeš on &nbsp;
            {prettyDate(this.props.post.published_at.String)}
          </Subtle>
          <Summary>{this.props.post.summary}</Summary>
          <span style={moreStyle()} href="#">
            More
          </span>
        </div>
      </Link>
    );
  }
}

export default radium(Preview);
