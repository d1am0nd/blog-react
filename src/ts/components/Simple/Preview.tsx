import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {IPost} from '../../api/posts';
import {
  color1,
  color2,
  color3,
  transition,
} from '../../misc/styles';
import {prettyDate} from '../../misc/misc';
import H2 from '../Simple/H2';
import Subtle from '../Simple/Subtle';
import Summary from '../Simple/Summary';

const Wrapper = styled.div`
  transition: ${transition};
  margin-bottom: 15px;
  border-bottom: 1px solid ${color3};
  &:hover {
    border-bottom: 1px solid ${color1};
  }
`;

const StyledLink = styled(Link)`
  color: ${color1};
  text-decoration: none;
`;

const StyledMore = styled.span`
  font-size: 20px;
  color: ${color2};
  transition: 0.1s;
  text-decoration: none;
`;

interface IProps {
  post: IPost;
};

const Preview: React.FC<IProps> = React.memo(({
  post,
}) => (
  <StyledLink
    to={`/posts/${post.slug}`} >
    <Wrapper>
      <H2>{post.title}</H2>
      <Subtle>
        Published by Dev Kordes on&nbsp;
        {prettyDate(post.published_at)}
      </Subtle>
      <Summary>{post.summary}</Summary>
      <StyledMore>More</StyledMore>
    </Wrapper>
  </StyledLink>
));

export default Preview;
