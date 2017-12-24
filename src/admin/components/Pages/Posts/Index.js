import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Row from '../../Partials/Row';
import Title from '../../Partials/Title';
import Search from '../../Partials/Search';

import {fetchPosts, deletePost} from '../../../store/actions/postsActions';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  handleSearchChange(e) {
    this.setState({
      search: e.target.value.toLowerCase(),
    });
  }

  handleDelete(post) {
    this.props.dispatch(deletePost(post.id));
    alert(post.title);
  }

  renderPosts() {
    return this
      .props
      .posts
      .filter(post => {
        return post
          .title
          .toLowerCase()
          .indexOf(this.state.search) !== -1;
      })
      .map((post, i) => {
        return <Row
          key={`row-${i}`}
          editUrl={`/admin/posts/${post.slug}`}
          handleDelete={e => this.handleDelete(post)}
          text={post.title}/>;
      });
  }

  render() {
    return (
      <div>
        <Title text={`Posts`}/>
        <Link to={`/admin/post/new`}>New</Link>
        <Search handleChange={e => this.handleSearchChange(e)}/>
        {this.renderPosts()}
      </div>
    );
  }
}

export default connect(store => {
  return {
    posts: store.posts.posts,
  };
})(radium(Index));
