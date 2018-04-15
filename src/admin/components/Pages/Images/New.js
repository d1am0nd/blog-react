import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Title from 'admin/components/Partials/Title';
import ImageForm from 'admin/components/Forms/ImageForm';

import {newImage} from 'admin/store/actions/imagesActions';
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
    this.props.newImage(image);
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

New.propTypes = {
  image: PropTypes.object,
  newImage: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    newImage: (image) => dispatch(newImage(image)),
  };
};

export default connect(null, mapDispatchToProps)(radium(New));
