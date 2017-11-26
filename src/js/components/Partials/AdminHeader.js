import React from 'react';
import radium from 'radium';

import {Link} from 'react-router-dom';

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

  renderMyPosts() {
    if (!this.props.posts) {
      return [];
    }
    return this
      .props
      .posts
      .map(i => {
        return (
          <li key={i.id}>
            <Link to={`/posts/edit/` + i.slug}>
              {i.title}
            </Link>
          </li>
        );
      });
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
        <ul>
          <li key={0}>
            <Link to={`/posts/write`}>
              New post
            </Link>
          </li>
          <li key={-1}>
            <Link to={`/admin/images`}>
              Images
            </Link>
          </li>
          <li key={-2}>
            <Link to={`/admin/images/new`}>
              New Image
            </Link>
          </li>
          {this.renderMyPosts()}
        </ul>
      </div>
    );
  }
}

export default radium(AdminHeader);
