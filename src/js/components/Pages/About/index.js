import React from 'react';
import radium from 'radium';

import H1 from '@/components/Simple/H1';
import Subtle from '@/components/Simple/Subtle';
import Summary from '@/components/Simple/Summary';
import P from '@/components/Simple/P';
import Social from '@/components/Containers/Social';

import content from './content.json';

class About extends React.Component {
  render() {
    return (
      <div>
        <H1>About me</H1>
        <Subtle>Dev Kordeš</Subtle>
        <Summary>{content.summary}</Summary>
        {content.paragraphs.map((content, i) => (
          <P key={i}>{content}</P>
        ))}
        <Social links={content.social}/>
      </div>
    );
  }
};

export default radium(About);
