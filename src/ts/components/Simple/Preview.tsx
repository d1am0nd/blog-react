import * as React from 'react';
import {Link} from 'react-router-dom';
import {IPost} from '../../api/posts';
import {
  color1,
  color2,
  wrapperStyle as ws,
} from '../../misc/styles';
import {prettyDate} from '../../misc/misc';
import H2 from '../Simple/H2';
import Subtle from '../Simple/Subtle';
import Summary from '../Simple/Summary';

const wrapperStyle = () => ({
  ...ws,
  ':hover': {
    'borderBottom': `1px solid ${color1}`,
  },
});

const linkStyle = () => ({
  'color': 'black',
  'textDecoration': 'none',
});

const moreStyle = () => ({
  'fontSize': '20px',
  'color': color2,
  'transition': '0.1s',
  'textDecoration': 'none',
});

interface IProps {
  post: IPost;
};

const Preview: React.FunctionComponent<IProps> = ({
  post,
}) => (
  <Link
    to={`/posts/${post.slug}`}
    style={linkStyle()}>
    <div style={wrapperStyle()}>
      <H2>{post.title}</H2>
      <Subtle>
        Published by Dev Kordes on&nbsp;
        {prettyDate(post.published_at)}
      </Subtle>
      <Summary>{post.summary}</Summary>
      <span style={moreStyle()}>More</span>
    </div>
  </Link>
);

export default Preview;
