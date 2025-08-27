import * as React from 'react';
import Title from '../Simple/Title';
import {Link} from 'react-router-dom';
import {getImages, deleteById, IImage} from '../../api/images';

const Images: React.FunctionComponent = () => {
  const [images, setImages] = React.useState<Array<IImage>>([]);

  React.useEffect(() => {
    getImages()
      .then(({data}) => setImages(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Title>Images</Title>
      <div>
        <Link to='/admin/image/new'>New</Link>
      </div>
      {images.map(({id, name, path}) => (
        <>
          <Link to={`/admin/image/edit/${id}`}>
            {name}
          </Link>
          <img src={path} />
          <div onClick={async () => {
            await deleteById(id!);
            setImages(images.filter(
              ({id: currId}) => currId !== id
            ));
          }}>
            <a href="javascript:;">Delete</a>
          </div>
        </>
      ))}
    </>
  );
};

export default Images;
