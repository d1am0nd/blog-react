import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

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
      .fetchImage(this.props.match.params.id)
      .then((res) => {
        this.setState({
          src: res.path,
        });
      })
      .catch((err) => {
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
    this.props.updateImage(image, this.props.image.id);
  }

  renderForm() {
    return typeof this.props.image.id !== 'undefined' ?
      <ImageForm
        image={this.props.image}
        handleSubmit={(e, image) => this.handleSubmit(e, image)}
        imageChanged={(e) => this.handleImageChange(e)}/> : null;
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

Edit.propTypes = {
  image: PropTypes.object,
  match: PropTypes.object,
  fetchImage: PropTypes.func.isRequired,
  updateImage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    image: state.images.image,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImage: (id) => dispatch(fetchImage(id)),
    updateImage: (image) => dispatch(updateImage(image)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(radium(Edit));
