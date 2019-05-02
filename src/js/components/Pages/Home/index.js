import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getPosts} from '@/store/selectors/posts';
import H1 from '@/components/Simple/H1';
import Preview from '@/components/Containers/Post/Preview';

class Home extends React.Component {
  render() {
    const {posts} = this.props;
    return (
      <div>
        <H1>Home</H1>
        {posts.map((post, i) => (
          <Preview post={post} key={i}/>
        ))}
      </div>
    );
  }
}

Home.propTypes = {
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  posts: getPosts(state),
});

export default connect(
  mapStateToProps,
)(radium(Home));
