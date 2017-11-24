import React from 'react';
import radium from 'radium';

import imagesApi from '../../../api/images';

class Images extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
    this.fetchImages();
  }

  fetchImages() {
    imagesApi
      .getImages()
      .then(res => {
        this.setState({
          images: res.data,
        });
      });
  }

  renderImages() {
    return this
      .state
      .images
      .map(i => {
        return (
          <img key={i.id} src={i.path}/>
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

export default radium(Images);
