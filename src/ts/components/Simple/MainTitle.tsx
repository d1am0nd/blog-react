import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {color1, color2} from '../../misc/styles';

const Container = styled.div`
  font-size: 30px;
  color: ${color1};
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:visited {
    color: ${color2};
    text-decoration: none;
  }
`;

const MainTitle: React.FC = ({children}) => (
  <Container>
    <StyledLink to={'/'}>
      {children}
    </StyledLink>
  </Container>
);

export default MainTitle;
