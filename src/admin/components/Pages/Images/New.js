import React from 'react';
import radium from 'radium';

import Title from 'admin/components/Partials/Title';
import ImageForm from 'admin/components/Forms/ImageForm';

import {newImage} from 'admin/api/images';
import {
  left as leftStyle,
  right as rightStyle,
} from 'admin/styles/show/show';

class New extends React.Component {
  constructor() {
    super();
    this.state = {
      src: '',
    };
  }

  handleImageChange(image) {
    this.setState({
      src: image.imgSrc,
    });
  }

  handleSubmit(e, image) {
    e.preventDefault();
    newImage(image)
      .then((res) => {
        alert('Success');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Title text="New image"/>
        <div style={leftStyle()}>
          <ImageForm
            image={{
              path: '',
              name: '',
            }}
            handleSubmit={(e, image) => this.handleSubmit(e, image)}
            imageChanged={(e) => this.handleImageChange(e)}/>
        </div>
        <div style={rightStyle()}>
          <img src={this.state.src}/>
        </div>
        <div style={{'clear': 'both'}}></div>
      </div>
    );
  }
}

export default radium(New);
