import React from 'react';
import radium from 'radium';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class ImageRow extends React.Component {
  render() {
    const {
      handleDelete,
      editUrl,
      text,
      src,
    } = this.props;
    return (
      <div>
        <Link to={editUrl}>
          <div>
            {text}
          </div>
          <img src={src}/>
        </Link>
        <div onClick={(e) => handleDelete(e)}>
          <a href="javascript:;">Delete</a>
        </div>
      </div>
    );
  }
}

ImageRow.propTypes = {
  editUrl: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
  handleDelete: PropTypes.func.isRequired,
};

export default radium(ImageRow);
