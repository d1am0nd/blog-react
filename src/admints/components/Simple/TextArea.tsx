import * as React from 'react';
import Label from './Label';

const wrapper = () => ({
  'width': '100%',
  'maxWidth': '100%',
});

const textarea = () => ({
  'width': '100%',
  'maxWidth': '100%',
});

interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FunctionComponent<IProps> = ({
  label,
  handleChange,
  ...rest
}) => (
  <div style={wrapper()}>
    <Label>{label}</Label>
    <textarea
      style={textarea()}
      {...rest}
      onChange={handleChange} />
  </div>
);

export default TextArea;
