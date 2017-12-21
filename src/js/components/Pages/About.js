import React from 'react';
import radium from 'radium';

import {
  subTitle as nameStyle,
} from '../../styles/general';

import Title from '../Partials/Simple/Title';
import Summary from '../Partials/Simple/Summary';
import Social from '../Partials/Simple/Social';

class About extends React.Component {
  constructor() {
    super();
  }

  static summary() {
    return `
      Full stack developer with huge preference for backend
      and modern SPA frameworks over CSS and jQuery.
    `;
  }

  p1() {
    return `
      I've been developing in PHP and JS professionally for years,
      mostly with Laravel, Vue js and jQuery. But with my side
      projects I try to, explore new tech, Go and React lately.
      I write about some of those in this blog.
    `;
  }

  render() {
    return (
      <div>
        <Title text={`About me`}/>
        <div style={nameStyle}>Dev Kordeš</div>
        <Summary text={About.summary()}/>
        <p>{this.p1()}</p>
        <div style={{marginBottom: '25px', width: '100%'}}/>
        <Social/>
      </div>
    );
  }
};

export default radium(About);
