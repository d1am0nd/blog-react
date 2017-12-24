import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import Title from '../../Partials/Title';
import ImageForm from '../../Forms/ImageForm';

import {fetchImage, newImage} from '../../../store/actions/imagesActions';
import {
  left as leftStyle,
  right as rightStyle,
} from '../../../styles/show/show';

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
    this.props.dispatch(newImage(image));
  }

  render() {
    return (
      <div>
        <Title text={`New image`}/>
        <div style={leftStyle()}>
          <ImageForm
            image={this.props.image}
            handleSubmit={(e, image) => this.handleSubmit(e, image)}
            imageChanged={e => this.handleImageChange(e)}/>
        </div>
        <div style={rightStyle()}>
          <img src={this.state.src}/>
        </div>
        <div style={{'clear': 'both'}}></div>
      </div>
    );
  }
}

export default connect()(radium(New));
