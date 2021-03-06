import * as React from 'react';
import H1 from '../Simple/H1';
import Subtle from '../Simple/Subtle';
import Summary from '../Simple/Summary';
import P from '../Simple/P';
import Social from '../Simple/Social';
import content from '../../../../config/aboutts';
import {IMeta} from '../hoc/setsMeta';

interface IAbout {
  summary: string;
  paragraphs: Array<string>;
  social: Array<{name: string, url: string}>;
};

const About: React.FunctionComponent = () => (
  <>
    <H1>About me</H1>
    <Subtle>Dev Kordeš</Subtle>
    <Summary>{content.summary}</Summary>
    {content.paragraphs.map((content, i) => (
      <P key={i}>{content}</P>
    ))}
    <Social links={content.social}/>
  </>
);

export const setMeta: IMeta = {
  title: () => 'About me',
  description: () => content.summary,
  url: () => '/about-me',
};

export default About;
