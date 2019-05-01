import React from 'react';
import radium from 'radium';
import marked from 'marked';
import renderer from '@/markdown/renderer';
import PropTypes from 'prop-types';

import {
  wrapperStyle,
  contentStyle,
} from './styles';
import {pretty as prettyDate} from '@/filters/date';
import H1 from '@/components/Simple/H1';
import Subtle from '@/components/Simple/Subtle';
import Summary from '@/components/Simple/Summary';

class Full extends React.Component {
  prettyDate() {
    if (this.props.post.published_at) {
      return prettyDate(this.props.post.published_at);
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
    const {post} = this.props;
    return (
      <div
        key={post.id}
        style={wrapperStyle()}>
        <H1>{post.title}</H1>
        <Subtle>Published by Dev Kordeš on {this.prettyDate()}</Subtle>
        <Summary>{post.summary}</Summary>
        <div
          style={contentStyle()}
          dangerouslySetInnerHTML={{__html: this.content()}}>
        </div>
      </div>
    );
  }
}

Full.propTypes = {
  post: PropTypes.object.isRequired,
};

export default radium(Full);
