import React from 'react';
import { hydrate } from 'react-dom'
import Layout from './components/ServerLayout';
import radium, {StyleRoot} from 'radium';
import {Provider, connect} from 'react-redux';
import {StaticRouter as Router} from 'react-router-dom';

@radium()
class App extends React.Component {
  render() {
    return (
      <StyleRoot
        radiumConfig={this.props.radiumConfig}>
        <Layout context={{}} location={this.props.location}/>
      </StyleRoot>
    );
  }
}

export default App;
