import React from 'react';
import radium from 'radium';

class AdminHeader extends React.Component {
  constructor() {
    super();
  }

  getStyles() {
    return {};
  }

  logout(e) {
    if (this.props.logout) {
      this.props.logout(e);
    }
  }

  render() {
    return (
      <div style={this.getStyles()}>
        Hi {this.props.user.name}
        <ul>
          <li onClick={e => this.logout(e)}>
            Logout
          </li>
        </ul>
      </div>
    );
  }
}

export default radium(AdminHeader);
