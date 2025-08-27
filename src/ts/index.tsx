import * as React from 'react';
import * as ReactDom from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (container) {
  ReactDom.hydrateRoot(container, <App />);
}
