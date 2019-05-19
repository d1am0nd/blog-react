import * as React from 'react';

export type InputEvent = (e: React.ChangeEvent<HTMLInputElement>) => void;

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  handleChange: InputEvent;
};

const SmallTextInput: React.FunctionComponent<IProps> = ({
  handleChange,
  ...rest
}) => (
  <input {...rest} onChange={handleChange} />
);

export default SmallTextInput;
