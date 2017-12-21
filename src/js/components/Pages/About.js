import React from 'react';
import radium from 'radium';

import {
  subTitle as nameStyle,
} from '../../styles/general';
import {Meta} from '../../meta/meta';

import Title from '../Partials/Simple/Title';
import Summary from '../Partials/Simple/Summary';
import Social from '../Partials/Simple/Social';

import {about as content} from '../../../../config/page';

class About extends React.Component {
  constructor() {
    super();
  }

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
        <Title text={`About me`}/>
        <div style={nameStyle}>Dev Kordeš</div>
        <Summary text={About.summary()}/>
        {this.paragraphs()}
        <div style={{marginBottom: '25px', width: '100%'}}/>
        <Social/>
      </div>
    );
  }
};

export default radium(About);
