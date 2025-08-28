import * as React from 'react';
import {StaticRouter} from 'react-router-dom/server';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import {SSRContext} from './misc/context';

interface IProps {
  context: any;
  location: string;
};

// Server-side version of AnalyticsWrapper that just passes through children
const ServerAnalyticsWrapper: React.FC<{children: React.ReactNode}> = ({children}) => <>{children}</>;

const Server: React.FC<IProps> = ({
  context,
  location,
}) => (
  <ErrorBoundary>
    <SSRContext.Provider value={context}>
      <StaticRouter location={location}>
        <ServerAnalyticsWrapper>
          <Layout />
        </ServerAnalyticsWrapper>
      </StaticRouter>
    </SSRContext.Provider>
  </ErrorBoundary>
);

export default Server;
