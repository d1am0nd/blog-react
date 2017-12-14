import React from 'react';
import ReactDOM from 'react-dom';
import App from './Client';
import {BrowserRouter as Router} from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import {clientStore} from './store';
import client from '../../config/client.json';
import ReactGA from 'react-ga';

if (client.env === 'prod' || client.env === 'production') {
  ReactGA.initialize(client.analytics);
  ReactGA.pageview(window.location.pathname + window.location.search);
}
const rootDom = document.getElementById('root');

ReactDOM.hydrate(
  (
    <App store={clientStore}/>
  ),
rootDom);
