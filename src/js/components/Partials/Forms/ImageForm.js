import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import formStyle from '../../../styles/form';

class ImageForm extends React.Component {
  constructor(props) {
    super(props);

    let image = {
      'name': '',
      'imgSrc': '',
      'image': '',
    };
    if (props.image) {
      Object.assign(image, props.image);
    }

    this.state = {
      image: image,
    };
  }
  componentDidMount(prevProps) {
    if (prevProps.image != this.props.image) {
      this.setState({
        image: {
          ...this.state.image,
          name: this.props.image.name,
          imgSrc: this.props.image.path,
        },
      });
    }
  }

  handleNameChange(e) {
    this.setState({
      image: {
        ...this.state.image,
        name: e.target.value,
      },
    });
  }

  handleImageChange(e) {
    let image = e.target.files[0];
    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        image: {
          ...this.state.image,
          image: image,
          imgSrc: reader.result,
        },
      });
    };

    reader.readAsDataURL(image);
  }

  handleSubmit(e) {
    if (this.props.handleSubmit) {
      let formData = new FormData();
      formData.set('image', this.state.image.image);
      formData.set('name', this.state.image.name);
      this.props.handleSubmit(e, formData);
    }
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div
          style={formStyle.formGroupStyle()}>
          <label>Name</label>
          <input
            style={formStyle.smallTextStyle()}
            value={this.state.image.name}
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
        <div style={formStyle.formGroupStyle()}>
          <img src={this.state.image.imgSrc}/>
        </div>
      </form>
    );
  }
}
export default connect(state => {
  return {
    image: state.images.image,
  };
})(radium(ImageForm));
