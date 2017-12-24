import React from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import ImageRow from '../../Partials/ImageRow';
import Title from '../../Partials/Title';

import {fetchImages, deleteImage} from '../../../store/actions/imagesActions';

class Index extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchImages());
  }

  handleDelete(image) {
    this.props.dispatch(deleteImage(image.id));
    alert(image.title);
  }

  render() {
    return (
      <div>
        <Title text={`Images`}/>
        <Link to={`/admin/image/new`}>New</Link>
        {this.props.images.map((image, i) => {
          return <ImageRow
            key={`row-${i}`}
            src={image.path}
            editUrl={`/admin/images/${image.slug}`}
            handleDelete={e => this.handleDelete(image)}
            text={image.title}/>;
        })}
      </div>
    );
  }
}

export default connect(store => {
  return {
    images: store.images.images,
  };
})(radium(Index));
