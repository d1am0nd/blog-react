import React from 'react';
import radium from 'radium';
import PropTypes from 'prop-types';

import Title from 'admin/components/Partials/Title';
import ImageForm from 'admin/components/Forms/ImageForm';

import {getById, update} from 'admin/api/images';
import {
  left as leftStyle,
  right as rightStyle,
} from 'admin/styles/show/show';

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      src: '',
      name: '',
    };
  }

  componentDidMount() {
    getById(this.props.match.params.id)
      .then((res) => {
        this.setState({
          loaded: true,
          src: res.data.path,
          name: res.data.name,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleImageChange(image) {
    this.setState({
      loaded: true,
      src: image.imgSrc,
      name: image.name,
    });
  }

  handleSubmit(e, image) {
    e.preventDefault();
    update(this.props.match.params.id, image)
      .then((res) => {
        alert('Success');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {loaded, src, name} = this.state;
    return (
      <div>
        <Title text={this.state.name}/>
        <div style={leftStyle()}>
          {loaded ? <ImageForm
            image={{
              path: src,
              name: name,
            }}
            handleSubmit={(e, image) => this.handleSubmit(e, image)}
            imageChanged={(e) => this.handleImageChange(e)}/> : null}
        </div>
        <div style={rightStyle()}>
          <img src={src}/>
        </div>
        <div style={{'clear': 'both'}}></div>
      </div>
    );
  }
}

Edit.propTypes = {
  match: PropTypes.object,
};

export default radium(Edit);
