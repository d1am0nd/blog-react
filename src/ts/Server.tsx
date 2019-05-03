import * as React from 'react';
import {StaticRouter, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Layout from './components/Layout';
import {SSRContext} from './misc/context';

interface IProps {
  context: any;
  location: string;
};

const Server: React.FunctionComponent<IProps> = ({
  context,
  location,
}) => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Dev Kordes</title>
    </Helmet>
    <SSRContext.Provider value={context}>
      <StaticRouter location={location} context={{}}>
        <Route path='/' component={Layout} />
      </StaticRouter>
    </SSRContext.Provider>
  </>
);

export default Server;
