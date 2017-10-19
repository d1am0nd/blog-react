import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Board from './Board';
import SimpleText from './Input/SimpleText';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Hearths Card Game',
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header
          title={this.state.title} />
        <Board />
        <Footer />
      </div>
    );
  }
}
