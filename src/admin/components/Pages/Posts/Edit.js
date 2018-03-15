import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import H1 from 'components/Simple/H1';
import PostForm from '../../Forms/PostForm';
import Post from 'components/Containers/Post/Full';

import {fetchPostBySlug, updatePost} from '../../../store/actions/postsActions';
import {
  left as leftStyle,
  right as rightStyle,
} from '../../../styles/show/show';

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {
        published_at: {},
      },
    };
  }

  componentDidMount() {
    this
      .props
      .fetchPostBySlug(this.props.match.params.slug)
      .then((res) => {
        this.setState({
          post: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  postChanged(post) {
    this.setState({
      post: post,
    });
  }

  handleSubmit(e, post) {
    e.preventDefault();
    this.props.updatePost(post);
  }

  renderForm() {
    return typeof this.state.post.id !== 'undefined' ?
      <PostForm
        postChanged={(post) => this.postChanged(post)}
        handleSubmit={(e, post) => this.handleSubmit(e, post)}
        post={this.props.post}/> : null;
  }

  render() {
    return (
      <div>
        <H1>{this.props.post.title}</H1>
        <div style={leftStyle()}>
          {this.renderForm()}
        </div>
        <div style={rightStyle()}>
          <Post post={this.state.post}/>
        </div>
        <div style={{'clear': 'both'}}></div>
      </div>
    );
  }
}

Edit.propTypes = {
  post: PropTypes.object,
  match: PropTypes.object.isRequired,
  fetchPostBySlug: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    post: store.posts.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostBySlug: (slug) => dispatch(fetchPostBySlug(slug)),
    updatePost: (post) => dispatch(updatePost(post)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(Edit));
