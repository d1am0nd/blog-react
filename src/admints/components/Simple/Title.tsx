import * as React from 'react';

const style = () => ({
  'fontSize': '28px',
});

const Title: React.FunctionComponent = ({
  children,
}) => (
  <div style={style()}>{children}</div>
);

export default Title;
