import * as React from 'react';
import {IImageEdit, create} from '../../api/images';
import Title from '../Simple/Title';
import ImageForm from '../Simple/ImageForm';

const leftStyle = () => ({
  'float': 'left' as 'left',
  'width': '45%',
});

const rightStyle = () => ({
  'float': 'right' as 'right',
  'width': '50%',
});

const ImageCreate: React.FunctionComponent = () => {
  const [image, setImage] = React.useState<IImageEdit>({
    imgSrc: '',
    name: '',
  });

  return (
    <>
      <Title>Create image</Title>
      <div style={leftStyle()}>
        <ImageForm
          image={image}
          handleChange={(img) => {
            setImage(img);
          }}
          handleSubmit={async (e) => {
            e.preventDefault();
            await create(image);
            alert('Created');
          }} />
      </div>
      <div style={rightStyle()}>
        <img src={image.imgSrc} />
      </div>
      <div style={{'clear': 'both'}} />
    </>
  );
};

export default ImageCreate;
