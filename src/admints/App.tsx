import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from '../ts/components/ErrorBoundary';

const App: React.FC = () => (
  <ErrorBoundary>
    <Router>
      <Layout />
    </Router>
  </ErrorBoundary>
);

export default App;
