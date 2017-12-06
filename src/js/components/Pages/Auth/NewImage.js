import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';

import ImageForm from '../../Partials/Forms/ImageForm';
import {newImage} from '../../../store/actions/imagesActions';

class NewImage extends React.Component {
  handleSubmit(e, formData) {
    e.preventDefault();
    this.props.postNewImage(formData);
  }

  render() {
    return (
      <ImageForm
        handleSubmit={(e, data) => this.handleSubmit(e, data)}/>
    );
  }
}

export default connect(store => {
  return {};
}, dispatch => {
  return {
    postNewImage: (formData) => dispatch(newImage(formData)),
  };
})(radium(NewImage));
