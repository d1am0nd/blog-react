import React from 'react';
import radium from 'radium';

import {Meta} from 'meta/meta';

import H1 from 'components/Simple/H1';
import Subtle from 'components/Simple/Subtle';
import Summary from 'components/Simple/Summary';
import P from 'components/Simple/P';
import Social from 'components/Partials/Simple/Social';

import {about as content} from 'config/page';

class About extends React.Component {
  componentDidMount() {
    Meta.setTitle(About.title());
    Meta.setDescription(About.summary());
  }

  static title() {
    return content.title;
  }

  static summary() {
    return content.summary;
  }

  p1() {
    return content.p1;
  }

  paragraphs() {
    return content.paragraphs.map((content, index) => {
      return (
        <P key={`paragraph-${index}`}>{content}</P>
      );
    });
  }

  render() {
    return (
      <div>
        <H1>About me</H1>
        <Subtle>Dev Kordeš</Subtle>
        <Summary>{About.summary()}</Summary>
        {this.paragraphs()}
        <Social/>
      </div>
    );
  }
};

export default radium(About);
