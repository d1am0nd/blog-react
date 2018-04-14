import React from 'react';
import radium from 'radium';

import H1 from '@/components/Simple/H1';
import Subtle from '@/components/Simple/Subtle';
import Summary from '@/components/Simple/Summary';
import P from '@/components/Simple/P';
import Social from '@/components/Containers/Social';

import {about, social} from 'config/page';

class About extends React.Component {
  render() {
    return (
      <div>
        <H1>About me</H1>
        <Subtle>Dev Kordeš</Subtle>
        <Summary>{about.summary}</Summary>
        {about.paragraphs.map((content, i) => (
          <P key={i}>content</P>
        ))}
        <Social links={social.links}/>
      </div>
    );
  }
};

export default radium(About);
