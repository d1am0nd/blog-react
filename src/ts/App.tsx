import * as React from 'react';
import {BrowserRouter, useLocation} from 'react-router-dom';
import * as ReactGA from 'react-ga';
import Layout from './components/Layout';
import {SSRContext} from './misc/context';
import client from '../../config/client';

const state = (window as any).__PRELOADED_STATE__;

const AnalyticsWrapper: React.FunctionComponent<{children: React.ReactNode}> = ({children}) => {
  const location = useLocation();

  React.useEffect(() => {
    if ((client.env === 'prod' || client.env === 'production') &&
      navigator.userAgent.indexOf('Speed Insights') == -1) {
      ReactGA.set({page: location.pathname});
      ReactGA.pageview(location.pathname);
      document
        .getElementById('link-canonical')
        ?.setAttribute('href', `https://kordes.dev${location.pathname}`);
    }
  }, [location]);

  return <>{children}</>;
};

if ((client.env === 'prod' || client.env === 'production') &&
  navigator.userAgent.indexOf('Speed Insights') == -1) {
  ReactGA.initialize(client.analytics);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const App: React.FunctionComponent = () => (
  <>
    <SSRContext.Provider value={state}>
      <BrowserRouter>
        <AnalyticsWrapper>
          <Layout />
        </AnalyticsWrapper>
      </BrowserRouter>
    </SSRContext.Provider>
  </>
);

export default App;
