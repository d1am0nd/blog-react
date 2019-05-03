import * as React from 'react';
import * as marked from 'marked';
import H1 from './H1';
import Subtle from './Subtle';
import Summary from './Summary';
import {IPost} from '../../api/posts';
import {wrapperStyle} from '../../misc/styles';
import {prettyDate} from '../../misc/misc';
import renderer from '../../misc/renderer';

const contentStyle = () => ({
  fontSize: '16px',
  marginTop: 0,
  marginBottom: 0,
});

interface IProps {
  post: IPost;
};

const render = (html: string) => marked(
  html,
  {renderer, sanitize: true}
);

const Post: React.FunctionComponent<IProps> = ({
  post,
}) => (
  <div
    style={wrapperStyle}>
    <H1>{post.title}</H1>
    <Subtle>Published by Dev Kordeš on {prettyDate(post.published_at)}</Subtle>
    <Summary>{post.summary}</Summary>
    <div
      style={contentStyle()}
      dangerouslySetInnerHTML={{__html: render(
        post.content
      )}}>
    </div>
  </div>
);

export default Post;
