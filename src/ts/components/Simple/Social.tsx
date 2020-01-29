import * as React from 'react';
import styled from 'styled-components';
import {transition} from '../../misc/styles';

const StyledTitle = styled.div`
  font-size: 22px;
  margin-top: 0;
  margin-bottom: 5px;
  padding: 0;
`;

const Ul = styled.ul`
  font-size: 20px;
  list-style-type: none;
  margin-top: 0;
  margin-bottom: 20px;
  padding: 0;
`;

const Li = styled.li`
  transition: ${transition};
  font-size: 20px;
  margin-right: 20px;
  display: inline-block;
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

interface ILink {
  name: string;
  url: string;
};

interface IProps {
  links: Array<ILink>;
};

const Social: React.FC<IProps> = ({
  links,
}) => (
  <>
    <StyledTitle>
      Public profiles
    </StyledTitle>
    <Ul>
      {links.map(({name, url}, i) => (
        <Li key={i}>
          <StyledLink
            target="_blank"
            rel="noopener noreferrer"
            href={url}>
            {name}
          </StyledLink>
        </Li>
      ))}
    </Ul>
  </>
);

export default Social;
