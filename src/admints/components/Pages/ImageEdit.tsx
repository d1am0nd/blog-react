import * as React from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
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

interface IParams {
  id: string;
};

const ImageEdit: React.FunctionComponent<RouteComponentProps<IParams>> = ({
  match,
}) => {
  const {id} = match.params;
  const [image, setImage] = React.useState<IImageEdit>();

  React.useEffect(() => {
    getById(parseInt(id))
      .then(({data}) => setImage({
        imgSrc: data.path,
        name: data.name,
      }))
      .catch((err) => console.log(err));
  }, []);

  return !image ? <>loading</> : (
    <>
      <Title>{image.name}</Title>
      <div style={leftStyle()}>
        <ImageForm
          handleChange={setImage}
          handleSubmit={async (e) => {
            e.preventDefault();
            console.log(await update(parseInt(id), image));
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

export default withRouter(ImageEdit);
