import React from 'react';
import radium from 'radium';
import {Link} from 'react-router-dom';

import ImageRow from 'admin/components/Partials/ImageRow';
import Title from 'admin/components/Partials/Title';
import Search from 'admin/components/Partials/Search';

import {getImages, deleteById} from 'admin/api/images';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      images: [],
    };
  }

  componentDidMount() {
    getImages()
      .then((res) => {
        this.setState({
          images: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSearchChange(e) {
    this.setState({
      search: e.target.value.toLowerCase(),
    });
  }

  handleDelete(e, image) {
    if (confirm('Delete?')) {
      deleteById(image.id)
        .then((res) => {
          this.setState({
            images: this
              .state
              .images
              .filter((i) => i.id !== image.id),
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    const {images, search} = this.state;
    return (
      <div>
        <Title text={`Images`}/>
        <Link to={`/admin/image/new`}>New</Link>
        <Search handleChange={(e) => this.handleSearchChange(e)}/>
        {images
          .filter((img) => img.name.toLowerCase().includes(search))
          .map((img) => (
            <ImageRow
              key={img.id}
              src={img.path}
              editUrl={`/admin/images/${img.id}`}
              handleDelete={(e) => this.handleDelete(e, img)}
              text={img.name}/>
          ))}
      </div>
    );
  }
}

export default radium(Index);
