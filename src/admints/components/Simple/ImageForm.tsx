import * as React from 'react';
import SmallText from '../Simple/SmallText';
import Submit from '../Simple/Submit';
import File from '../Simple/File';
import {IImageEdit} from '../../api/images';

interface IProps {
  image: IImageEdit;
  handleChange: (img: IImageEdit) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ImageForm: React.FunctionComponent<IProps> = ({
  image,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <SmallText
        value={image.name}
        handleChange={({currentTarget}) => handleChange({
          ...image,
          name: currentTarget.value,
        })}
        title='Name'/>
      <File
        label='Image'
        handleChange={({currentTarget}) => {
          const newImg = currentTarget.files[0];
          const reader = new FileReader();

          reader.onloadend = ({target}) => {
            handleChange({
              ...image,
              imgSrc: (target as any).result as string,
              image: newImg,
            });
          };

          reader.readAsDataURL(newImg);
        }} />
      <Submit>Submit</Submit>
    </form>
  );
};

export default ImageForm;
