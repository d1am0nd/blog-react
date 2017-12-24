import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import Title from '../../Partials/Title';
import ImageForm from '../../Forms/ImageForm';

import {fetchImage, updateImage} from '../../../store/actions/imagesActions';
import {
  left as leftStyle,
  right as rightStyle,
} from '../../../styles/show/show';

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      src: '',
    };
  }

  componentDidMount() {
    this
      .props
      .dispatch(fetchImage(this.props.match.params.id))
      .then(res => {
        this.setState({
          src: res.path,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleImageChange(image) {
    this.setState({
      src: image.imgSrc,
    });
  }

  handleSubmit(e, image) {
    e.preventDefault();
    this.props.dispatch(updateImage(image, this.props.image.id));
  }

  renderForm() {
    if (typeof this.props.image.id !== 'undefined') {
      return (
        <ImageForm
          image={this.props.image}
          handleSubmit={(e, image) => this.handleSubmit(e, image)}
          imageChanged={e => this.handleImageChange(e)}/>
      );
    }
    return '';
  }

  render() {
    return (
      <div>
        <Title text={this.props.image.name}/>
        <div style={leftStyle()}>
          {this.renderForm()}
        </div>
        <div style={rightStyle()}>
          <img src={this.state.src}/>
        </div>
        <div style={{'clear': 'both'}}></div>
      </div>
    );
  }
}

export default connect(store => {
  return {
    image: store.images.image,
  };
})(radium(Edit));
