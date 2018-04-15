import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import SmallText from '../Partials/Form/SmallText';
import File from '../Partials/Form/File';
import Submit from '../Partials/Form/Submit';

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    const {path, name} = props.image;
    this.state = {
      image: {
        'image': {},
        'imgSrc': path ? path : '',
        'name': name ? name : '',
      },
    };
  }

  handleNameChange(e) {
    const image = {
      ...this.state.image,
      name: e.target.value,
    };
    this.setState({
      image: image,
    });
    this.props.imageChanged(image);
  }

  handleImageChange(e) {
    const image = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const newImage = {
        ...this.state.image,
        image: image,
        imgSrc: reader.result,
      };
      this.setState({
        image: newImage,
      });

      this.props.imageChanged(newImage);
    };

    reader.readAsDataURL(image);
  }

  handleSubmit(e) {
    const formData = new FormData();
    formData.set('image', this.state.image.image);
    formData.set('name', this.state.image.name);
    this.props.handleSubmit(e, formData);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <SmallText
          inputProps={{
            value: this.state.image.name,
          }}
          handleChange={(e) => this.handleNameChange(e)}
          title={`Name`}/>
        <File
          handleChange={(e) => this.handleImageChange(e)}/>
        <Submit text={`Submit`}/>
      </form>
    );
  }
}

ImageForm.propTypes = {
  image: PropTypes.object.isRequired,
  imageChanged: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default radium(ImageForm);
