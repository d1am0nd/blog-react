import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/Layout';

const App: React.FunctionComponent = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
