import React from 'react';
import radium from 'radium';
import marked from 'marked';
import renderer from '../../../js/marked/renderer';

import {
  date as dateStyle,
  summary as summaryStyle,
  content as contentStyle,
  wrapper as wrapperStyle,
  showMore as linkStyle,
} from '../../../js/styles/post';
import {pretty as prettyDate} from '../../../js/filters/date';
import Title from '../../../js/components/Partials/Simple/Title';
import Summary from '../../../js/components/Partials/Simple/Summary';

class Post extends React.Component {
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
        style={{
          ...wrapperStyle(),
          'width': '100%',
        }}>
        <Title text={this.props.post.title}/>
        <div style={dateStyle()}>
          Published on {this.prettyDate()}
        </div>
        <Summary text={this.props.post.summary}/>
        <div
          style={contentStyle()}
          dangerouslySetInnerHTML={{__html: this.content()}}>
        </div>
      </div>
    );
  }
}

export default radium(Post);
