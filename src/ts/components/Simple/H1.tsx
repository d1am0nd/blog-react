import * as React from 'react';

const style = () => ({
  marginBottom: '5px',
  fontWeight: 300,
  marginTop: 0,
});

const H1: React.FunctionComponent = ({
  children,
}) => (
  <h1 style={style()}>{children}</h1>
);

export default H1;
