import * as React from 'react';
import SmallTextInput, {
  InputEvent,
} from './SmallTextInput';
import Title from '../Simple/Title';
import Label from '../Simple/Label';

const wrapper = () => ({
  'width': '200px',
  'maxWidth': '100%',
});

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  label?: string;
  handleChange: InputEvent;
};

const SmallText: React.FunctionComponent<IProps> = ({
  title,
  label,
  ...rest
}) => (
  <div style={wrapper()}>
    {title ? (<Title>{title}</Title>) : null}
    {label ? (<Label>{label}</Label>) : null}
    <SmallTextInput {...rest} />
  </div>
);

export default SmallText;
