import * as React from 'react';
import {Route} from 'react-router-dom';
import MainTitle from './Simple/MainTitle';
import Nav from './Nav';
import Cookies from './Simple/Cookies';
import {builtComponents} from '../misc/routes';
import {alreadyDismissed, dismiss} from '../misc/cookies';
import {transition, baseWidth} from '../misc/styles';

const style = (
  cookiesDismissed: boolean
) => ({
  ...transition,
  ...baseWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  fontFamily: 'Roboto',
  fontWeight: 300,
  lineHeight: 1.4,
  paddingBottom: cookiesDismissed ? '0px' : '30px',
});

const Layout: React.FunctionComponent = () => {
  return (
    <div style={style(alreadyDismissed())}>
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
    </div>
  );
};

export default Layout;
