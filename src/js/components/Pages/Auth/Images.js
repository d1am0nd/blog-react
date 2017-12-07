import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import {fetchImages, deleteImage} from '../../../store/actions/imagesActions';
import {Link} from 'react-router-dom';

class Images extends React.Component {
  componentDidMount() {
    this.fetchImages();
  }

  fetchImages() {
    this.props.dispatch(fetchImages());
  }

  deleteById(e, id) {
    e.preventDefault();
    this.props.dispatch(deleteImage(id));
  }

  imageStyle() {
    return {
      maxWidth: '100%',
    };
  }

  renderImages() {
    return this
      .props
      .images
      .map(i => {
        return (
          <div key={i.id}>
            {i.name} -&nbsp;
            <a href="#" onClick={e => this.deleteById(e, i.id)}>Delete</a>
            <br/>
            <Link to={`/admin/images/edit/` + i.id}>
              <img style={this.imageStyle()} key={i.id} src={i.path}/>
            </Link>
          </div>
        );
      });
  }

  render() {
    return (
      <div>
        Images
        {this.renderImages()}
      </div>
    );
  }
}

export default connect(store => {
  return {
    images: store.images.images,
  };
})(radium(Images));
