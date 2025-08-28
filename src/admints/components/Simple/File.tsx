import * as React from 'react';
import Label from './Label';
import Title from './Title';

const smallWrapper = () => ({
  'width': '200px',
  'maxWidth': '100%',
});

interface IProps {
  title?: string;
  label?: string;
  handleChange: (
    e: React.FormEvent<HTMLInputElement>
  ) => void;
};

const File: React.FC<IProps> = ({
  title,
  label,
  handleChange,
}) => {
  return (
    <div style={smallWrapper()}>
      {title ? (<Title>{title}</Title>) : null}
      {label ? (<Label>{label}</Label>) : null}
      <input
        accept='image/*'
        type='file'
        onChange={handleChange} />
    </div>
  );
};

export default File;
