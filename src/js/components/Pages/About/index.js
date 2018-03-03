import React from 'react';
import radium from 'radium';

import {Meta} from '../../../meta/meta';

import H1 from '../../Simple/H1';
import SubH1 from '../../Simple/SubH1';
import Summary from '../../Simple/Summary';
import Social from '../../Partials/Simple/Social';

import {about as content} from '../../../../../config/page';

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
        <p key={`paragraph-${index}`}>{content}</p>
      );
    });
  }

  render() {
    return (
      <div>
        <H1>About me</H1>
        <SubH1>Dev Kordeš</SubH1>
        <Summary>{About.summary()}</Summary>
        {this.paragraphs()}
        <Social/>
      </div>
    );
  }
};

export default radium(About);
