import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './App';

ReactDom.hydrate(
  <App />,
  document.getElementById('root')
);
