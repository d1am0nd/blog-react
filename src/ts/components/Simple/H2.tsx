import * as React from 'react';

const style = () => ({
  'marginBottom': '5px',
  'marginTop': 0,
  'fontWeight': 300,
});

const H2: React.FunctionComponent = ({
  children,
}) => (
  <h2 style={style()}>{children}</h2>
);

export default H2;
