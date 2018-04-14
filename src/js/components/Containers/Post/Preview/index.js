import React from 'react';
import radium from 'radium';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  wrapperStyle,
  linkStyle,
  moreStyle,
} from './styles';
import {pretty as prettyDate} from '@/filters/date';
import H2 from '@/components/Simple/H2';
import Subtle from '@/components/Simple/Subtle';
import Summary from '@/components/Simple/Summary';

class Preview extends React.Component {
  render() {
    const {post} = this.props;
    return (
      <Link
        style={linkStyle()}
        to={'/posts/' + post.slug}
        key={post.id}>
        <div
          style={wrapperStyle()}>
          <H2>{post.title}</H2>
          <Subtle>
            Published by Dev Kordeš on &nbsp;
            {prettyDate(post.published_at.String)}
          </Subtle>
          <Summary>{post.summary}</Summary>
          <span style={moreStyle()} href="#">
            More
          </span>
        </div>
      </Link>
    );
  }
}

Preview.propTypes = {
  post: PropTypes.object.isRequired,
};

export default radium(Preview);
