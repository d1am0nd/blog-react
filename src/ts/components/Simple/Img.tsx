import * as React from 'react';

const imgStyle = () => ({
  'maxWidth': '100%',
});

interface IProps {
  src: string;
  alt?: string;
  title?: string;
}

const Img: React.FunctionComponent<IProps> = ({
  src,
  alt,
  title,
}) => (
  <img
    style={imgStyle()}
    src={src}
    alt={alt || ''}
    title={title || ''}/>
);

export default Img;
