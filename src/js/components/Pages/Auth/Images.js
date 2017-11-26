import React from 'react';
import radium from 'radium';

import imagesApi from '../../../api/images';
import {Link} from 'react-router-dom';

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

  imageStyle() {
    return {
      maxWidth: '100%',
    };
  }

  renderImages() {
    return this
      .state
      .images
      .map(i => {
        return (
          <div key={i.id}>
            {i.name} <br/>
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

export default radium(Images);
