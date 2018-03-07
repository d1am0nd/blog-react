import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import marked from 'marked';
import renderer from 'markdown/renderer';

import {
  wrapperStyle,
  contentStyle,
} from './styles';
import {pretty as prettyDate} from 'filters/date';
import H1 from 'components/Simple/H1';
import Subtle from 'components/Simple/Subtle';
import Summary from 'components/Simple/Summary';

class Show extends React.Component {
  prettyDate() {
    if (this.props.post.published_at) {
      return prettyDate(this.props.post.published_at.String);
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
    return (
      <div
        key={this.props.post.id}
        style={wrapperStyle()}>
        <H1>{this.props.post.title}</H1>
        <Subtle>Published by Dev Kordeš on {this.prettyDate()}</Subtle>
        <Summary>{this.props.post.summary}</Summary>
        <div
          style={contentStyle()}
          dangerouslySetInnerHTML={{__html: this.content()}}>
        </div>
      </div>
    );
  }
}

export default radium(Show);
