import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

import {StyleRoot} from 'radium';

const app = document.getElementById('root');

ReactDOM.render(<StyleRoot><Layout/></StyleRoot>, app);
