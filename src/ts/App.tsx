import * as React from 'react';
import {BrowserRouter, useLocation} from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import {SSRContext} from './misc/context';
import client from '../../config/client';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const state = (window as any).__PRELOADED_STATE__;

const AnalyticsWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  const location = useLocation();

  React.useEffect(() => {
    if ((client.env === 'prod' || client.env === 'production') &&
      navigator.userAgent.indexOf('Speed Insights') == -1 &&
      typeof window.gtag === 'function') {
      window.gtag('config', client.analytics, {
        page_path: location.pathname,
      });
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
      });
      document
        .getElementById('link-canonical')
        ?.setAttribute('href', `https://kordes.dev${location.pathname}`);
    }
  }, [location]);

  return <>{children}</>;
};

if ((client.env === 'prod' || client.env === 'production') &&
  navigator.userAgent.indexOf('Speed Insights') == -1 &&
  typeof window.gtag === 'function') {
  window.gtag('config', client.analytics, {
    page_path: window.location.pathname + window.location.search,
  });
  window.gtag('event', 'page_view', {
    page_path: window.location.pathname + window.location.search,
  });
}

const App: React.FC = () => (
  <ErrorBoundary>
    <SSRContext.Provider value={state}>
      <BrowserRouter>
        <AnalyticsWrapper>
          <Layout />
        </AnalyticsWrapper>
      </BrowserRouter>
    </SSRContext.Provider>
  </ErrorBoundary>
);

export default App;
