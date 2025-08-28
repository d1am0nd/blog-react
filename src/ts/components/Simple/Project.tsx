import * as React from 'react';
import styled from 'styled-components';
import H2 from './H2';
import Summary from './Summary';
import {IProject} from '../../api/projects';
import {
  transition,
  color1,
  color3,
} from '../../misc/styles';

const Wrapper = styled.div`
  transition: ${transition};
  width: 100%;
  margin-bottom: 15px;
  border-bottom: 1px solid ${color3};
  &:hover {
    border-bottom: 1px solid ${color1};
  }
`;

const StyledLink = styled.a`
  color: ${color1};
  text-decoration: none;
`;

const FullWidth = styled.div`
  width: 100%;
`;

const FullWidthImg = styled.img`
  width: 100%;
`;

interface IProps {
  project: IProject;
};

const Project: React.FC<IProps> = React.memo(({
  project,
}) => (
  <Wrapper>
    <StyledLink
      target="_blank"
      rel="noopener noreferrer"
      href={project.url}>
      <H2>{project.title}</H2>
      <FullWidth>
        <FullWidthImg src={project.img_src}/>
      </FullWidth>
      <Summary>{project.description}</Summary>
    </StyledLink>
  </Wrapper>
));

export default Project;
