import React from 'react';
import ReactDOM from 'react-dom';
import App from './Client';
import {clientStore} from '@/store';
// import './service-worker.js';

ReactDOM.hydrate(
  (
    <App store={clientStore}/>
  ),
  document.getElementById('root')
);
