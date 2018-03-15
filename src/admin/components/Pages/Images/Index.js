import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import ImageRow from '../../Partials/ImageRow';
import Title from '../../Partials/Title';
import Search from '../../Partials/Search';

import {fetchImages, deleteImage} from '../../../store/actions/imagesActions';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  componentDidMount() {
    this.props.fetchImages();
  }

  handleSearchChange(e) {
    this.setState({
      search: e.target.value.toLowerCase(),
    });
  }

  handleDelete(e, image) {
    this.props.deleteImage(image.id);
  }

  renderImages() {
    return this
      .props
      .images
      .filter((image) => {
        return image
          .name
          .toLowerCase()
          .indexOf(this.state.search) !== -1;
      })
      .map((image, i) => {
        return (
          <ImageRow
            key={`row-${i}`}
            src={image.path}
            editUrl={`/admin/images/${image.id}`}
            handleDelete={(e) => this.handleDelete(e, image)}
            text={image.name}/>
        );
      });
  }

  render() {
    return (
      <div>
        <Title text={`Images`}/>
        <Link to={`/admin/image/new`}>New</Link>
        <Search handleChange={(e) => this.handleSearchChange(e)}/>
        {this.renderImages()}
      </div>
    );
  }
}

Index.propTypes = {
  images: PropTypes.array,
  fetchImages: PropTypes.func.isRequired,
  deleteImage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    images: store.images.images,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: () => dispatch(fetchImages()),
    deleteImage: (id) => dispatch(deleteImage(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(Index));
