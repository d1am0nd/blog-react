import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Meta, defaultTitle, defaultDescription} from 'meta/meta';
import {getPosts} from 'store/selectors/posts';
import {dataLoaded} from 'store/selectors/misc';
import {fetchPosts} from 'store/actions/postsActions';
import H1 from 'components/Simple/H1';
import Preview from 'components/Containers/Post/Preview';

class Index extends React.Component {
  static fetchData(store) {
    return store.dispatch(fetchPosts());
  }

  componentDidMount() {
    if (this.props.dataLoaded) {
      this.props.fetchPosts()
        .then((data) => {
          Meta.setTitle(defaultTitle);
          Meta.setDescription(defaultDescription);
        });
    }
  }

  renderPosts() {
    return this
      .props
      .posts
      .map((i) => {
        return (
          <Preview post={i} key={i.id}/>
        );
      });
  }

  render() {
    return (
      <div>
        <H1>Home</H1>
        {this.renderPosts()}
      </div>
    );
  }
}

Index.propTypes = {
  posts: PropTypes.array.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  fetchPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    posts: getPosts(state),
    dataLoaded: dataLoaded(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(Index));
