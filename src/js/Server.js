// import React from 'react';
// import { hydrate } from 'react-dom'
// import Layout from './components/ServerLayout';
// import radium, {StyleRoot} from 'radium';
// import {Provider, connect} from 'react-redux';
// import {StaticRouter as Router} from 'react-router-dom';

// @radium()
// class App extends React.Component {
//   render() {
//     return (
//       <StyleRoot>
//         <Layout context={{}} location={this.props.location}/>
//       </StyleRoot>
//       <Provider store={this.props.store}>
//         <StyleRoot>
//           <Router><Layout/></Router>
//         </StyleRoot>
//       </Provider>
//     );
//   }
// }

// export default radium(App);
import React from 'react';
import Layout from './components/Layout';
import {StyleRoot} from 'radium';
import {Provider, connect} from 'react-redux';
import {StaticRouter as Router} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <StyleRoot
          radiumConfig={this.props.radiumConfig}>
          <Router context={this.props.context} location={this.props.location}>
            <Layout/>
          </Router>
        </StyleRoot>
      </Provider>
    );
  }
}

export default App;
