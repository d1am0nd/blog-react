import * as React from 'react';

const pStyle = () => ({
  'fontSize': '16px',
});

const P: React.FunctionComponent = ({
  children,
}) => (
  <p style={pStyle()}>
    {children}
  </p>
);

export default P;
