import React from 'react';
import ReactDOM from 'react-dom';
import App from './Client';
import {BrowserRouter as Router} from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import {clientStore} from './store';
import './service-worker.js';

console.log(Router);

const rootDom = document.getElementById('root');

ReactDOM.hydrate(
  (
    <App store={clientStore}/>
  ),
rootDom);
