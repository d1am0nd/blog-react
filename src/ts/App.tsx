import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {Helmet} from 'react-helmet';
import * as ReactGA from 'react-ga';
import Layout from './components/Layout';
import {SSRContext} from './misc/context';
import client from '../../config/client';

const state = (window as any).__PRELOADED_STATE__;
const history = createBrowserHistory();

if ((client.env === 'prod' || client.env === 'production') &&
  navigator.userAgent.indexOf('Speed Insights') == -1) {
  ReactGA.initialize(client.analytics);
  ReactGA.pageview(window.location.pathname + window.location.search);

  history.listen(({pathname}) => {
    ReactGA.set({page: location.pathname});
    ReactGA.pageview(location.pathname);
    document
      .getElementById('link-canonical')
      .setAttribute('href', `https://kordes.dev${pathname}`);
  });
}

const App: React.FunctionComponent = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Dev Kordes</title>
    </Helmet>
    <SSRContext.Provider value={state}>
      <BrowserRouter>
        <Route path='/' component={Layout} />
      </BrowserRouter>
    </SSRContext.Provider>
  </>
);

export default App;
