import * as React from 'react';
import {useParams} from 'react-router-dom';
import Title from '../Simple/Title';
import ImageForm from '../Simple/ImageForm';
import {
  getById,
  update,
  IImageEdit,
} from '../../api/images';

const leftStyle = () => ({
  'float': 'left' as 'left',
  'width': '45%',
});

const rightStyle = () => ({
  'float': 'right' as 'right',
  'width': '50%',
});

const ImageEdit: React.FunctionComponent = () => {
  const {id} = useParams<{id: string}>();
  const [image, setImage] = React.useState<IImageEdit>();

  React.useEffect(() => {
    if (!id) return;
    getById(parseInt(id))
      .then(({data}) => setImage({
        imgSrc: data.path,
        name: data.name,
      }))
      .catch((err) => console.log(err));
  }, [id]);

  return !image ? <>loading</> : (
    <>
      <Title>{image.name}</Title>
      <div style={leftStyle()}>
        <ImageForm
          handleChange={setImage}
          handleSubmit={async (e) => {
            e.preventDefault();
            if (!id) return;
            await update(parseInt(id), image);
            alert('Updated');
          }}
          image={image} />
      </div>
      <div style={rightStyle()}>
        <img src={image.imgSrc} />
      </div>
      <div style={{'clear': 'both'}} />
    </>
  );
};

export default ImageEdit;
