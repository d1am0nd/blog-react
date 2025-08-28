import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import MainTitle from './Simple/MainTitle';
import Nav from './Nav';
import {builtComponents} from '../misc/routes';
import {transition, baseWidth} from '../misc/styles';

const Wrapper = styled.div`
  transition: ${transition};
  width: ${baseWidth};
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  line-height: 1.4;
  padding-bottom: 0px;
`;

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <MainTitle>
        Dev Kordes
      </MainTitle>
      <Nav />
      <Routes>
        {builtComponents.map(({Component, path}) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Wrapper>
  );
};

export default Layout;
