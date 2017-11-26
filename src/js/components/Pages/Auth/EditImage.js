import NewImage from './NewImage';
import radium from 'radium';

import imgApi from '../../../api/images';

class EditImage extends NewImage {
  constructor(props) {
    super(props);

    this.fetchImage();
  }

  fetchImage() {
    imgApi
      .getById(this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          imgSrc: res.data.path,
        });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.set('image', this.state.image);
    formData.set('name', this.state.name);
    imgApi
      .update(formData, this.props.match.params.id)
      .then(res => {
        alert('Successfully updated the image');
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default radium(EditImage);
