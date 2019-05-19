import * as React from 'react';
import {color2} from '../../misc/styles';

const subStyle = () => ({
  fontSize: '18px',
  marginTop: 0,
  marginBottom: '5px',
  color: color2,
});

const Subtle: React.FunctionComponent = ({
  children,
}) => (
  <div style={subStyle()}>
    {children}
  </div>
);

export default Subtle;
