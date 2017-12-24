import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Row from '../../Partials/Row';
import Title from '../../Partials/Title';

import {fetchPosts, deletePost} from '../../../store/actions/postsActions';

class Index extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  handleDelete(post) {
    this.props.dispatch(deletePost(post.id));
    alert(post.title);
  }

  render() {
    return (
      <div>
        <Title text={`Posts`}/>
        <Link to={`/admin/posts/new`}>New</Link>
        {this.props.posts.map(post => {
          return <Row
            editUrl={`/admin/posts/${post.slug}`}
            handleDelete={e => this.handleDelete(post)}
            text={post.title}/>;
        })}
      </div>
    );
  }
}

export default connect(store => {
  return {
    posts: store.posts.posts,
  };
})(radium(Index));
