import * as React from 'react';
import marked = require('marked');
import styled from 'styled-components';
import H1 from './H1';
import Subtle from './Subtle';
import Summary from './Summary';
import {IPost} from '../../api/posts';
import {transition, color3} from '../../misc/styles';
import {prettyDate} from '../../misc/misc';
import renderer from '../../misc/renderer';

const Wrapper = styled.article`
  transition: ${transition};
  margin-bottom: 15px;
  border-bottom: 1px solid ${color3};
`;

const Content = styled.div`
  font-size: 16px;
  margint-top: 0;
  margin-bottom: 0;
`;

interface IProps {
  post: IPost;
};

const render = (html: string) => marked(html, {renderer});

const Post: React.FC<IProps> = ({
  post,
}) => (
  <Wrapper>
    <H1>{post.title}</H1>
    <Subtle>Published by Dev Kordeš on {prettyDate(post.published_at)}</Subtle>
    <Summary>{post.summary}</Summary>
    <Content
      dangerouslySetInnerHTML={{__html: render(
        post.content || ''
      )}}>
    </Content>
  </Wrapper>
);

export default Post;
