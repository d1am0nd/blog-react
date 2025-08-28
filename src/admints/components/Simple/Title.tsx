import * as React from 'react';

const style = () => ({
  'fontSize': '28px',
});

const Title: React.FC<{children: React.ReactNode}> = ({
  children,
}) => (
  <div style={style()}>{children}</div>
);

export default Title;
