import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './App';
console.log(123);

ReactDom.hydrate(
  <App />,
  document.getElementById('root')
);
