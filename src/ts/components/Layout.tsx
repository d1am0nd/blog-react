import * as React from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import MainTitle from './Simple/MainTitle';
import Nav from './Nav';
import Cookies from './Simple/Cookies';
import {builtComponents} from '../misc/routes';
import {alreadyDismissed, dismiss} from '../misc/cookies';
import {transition, baseWidth} from '../misc/styles';

const Wrapper = styled.div`
  transition: ${transition};
  width: ${baseWidth};
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  line-height: 1.4;
  padding-bottom: ${({cookiesDismissed}: {cookiesDismissed: boolean}) => cookiesDismissed ? '0px' : '30px'};
`;

const Layout: React.FunctionComponent = () => {
  return (
    <Wrapper cookiesDismissed={alreadyDismissed()}>
      <MainTitle>
        Dev Kordes
      </MainTitle>
      <Nav />
      {builtComponents.map(({Component, path}) => (
        <Route key={path} path={path} exact component={Component} />
      ))}
      <Cookies
        display={!alreadyDismissed}
        handleDismiss={dismiss} />
    </Wrapper>
  );
};

export default Layout;
