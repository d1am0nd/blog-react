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

  deleteById(e, id) {
    e.preventDefault();
    imagesApi
      .deleteById(id)
      .then(res => {
        let newimages = this.state.images.filter(i => {
          return i.id != id;
        });
        this.setState({
          images: newimages,
        });
      })
      .catch(err => {
        console.log(err);
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

export default radium(Images);
