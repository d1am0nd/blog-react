import React from 'react';
import radium from 'radium';
import {Link} from 'react-router-dom';

import Row from 'admin/components/Partials/Row';
import Title from 'admin/components/Partials/Title';
import Search from 'admin/components/Partials/Search';

import {getMine, deletePost} from 'admin/api/posts';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: '',
    };
  }

  componentDidMount() {
    getMine()
      .then((res) => {
        this.setState({posts: res.data});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSearchChange(e) {
    this.setState({
      search: e.target.value.toLowerCase(),
    });
  }

  handleDelete(post) {
    if (confirm(`Delete ${post.title}?`)) {
      deletePost(post.id)
        .then((res) => {
          this.setState({
            posts: this
              .state
              .posts
              .filter((p) => p.id !== post.id),
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    const {posts, search} = this.state;
    return (
      <div>
        <Title text={`Posts`}/>
        <Link to={`/admin/post/new`}>New</Link>
        <Search handleChange={(e) => this.handleSearchChange(e)}/>
        {posts
          .filter((p) => p.title.toLowerCase().includes(search))
          .map((p) => (
            <Row
              key={p.id}
              editUrl={`/admin/posts/${p.slug}`}
              handleDelete={(e) => this.handleDelete(p)}
              text={p.title}/>
          ))}
      </div>
    );
  }
}

export default radium(Index);
