import React from 'react';
import radium from 'radium';

import ImageUploader from 'react-images-upload';

import imagesApi from '../../../api/images';
import formStyle from '../../../styles/form';

class NewImage extends React.Component {
  constructor() {
    super();
    this.state = {
      image: '',
      imageName: '',
      imgSrc: '',
    };
  }

  handleNameChange(e) {
    this.setState({
      imageName: e.target.value,
    });
  }

  handleImageChange(e) {
    let image = e.target.files[0];
    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        image: image,
        imgSrc: reader.result,
      });
    };

    reader.readAsDataURL(image);
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.set('image', this.state.image);
    formData.set('name', this.state.imageName);
    imagesApi
      .new(formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div
          style={formStyle.formGroupStyle()}>
          <label>Name</label>
          <input
            style={formStyle.smallTextStyle()}
            value={this.state.name}
            onChange={e => this.handleNameChange(e)}
            autoFocus="true"
            type="text"/>
        </div>
        <div
          style={formStyle.formGroupStyle()}>
          <input
            accept="image/*"
            type="file"
            onChange={e => this.handleImageChange(e)}/>
        </div>
        <div
          style={formStyle.formGroupStyle()}>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default radium(NewImage);
