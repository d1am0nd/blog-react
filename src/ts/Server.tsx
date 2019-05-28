import * as React from 'react';
import {StaticRouter, Route} from 'react-router-dom';
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
  <SSRContext.Provider value={context}>
    <StaticRouter location={location} context={{}}>
      <Route path='/' component={Layout} />
    </StaticRouter>
  </SSRContext.Provider>
);

export default Server;
