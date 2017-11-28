import React from 'react';
import NewImage from './NewImage';
import radium from 'radium';
import {connect} from 'react-redux';

import {fetchImage, updateImage} from '../../../store/actions/imagesActions';
import ImageForm from '../../Partials/Forms/ImageForm';

@connect(store => {
  return {
    image: store.images.image,
  };
})
class EditImage extends React.Component {
  componentWillMount() {
    this.fetchImage();
  }

  fetchImage() {
    this.props.dispatch(fetchImage(this.props.match.params.id));
  }

  handleSubmit(e, formData) {
    e.preventDefault();
    this.props.dispatch(updateImage(formData, this.props.match.params.id));
  }

  render() {
    return (
      <ImageForm
        handleSubmit={(e, data) => this.handleSubmit(e, data)}
        image={this.props.image}/>
    );
  }
}

export default radium(EditImage);
