import * as React from 'react';

const style = () => ({
  'fontSize': '28px',
});

const Title: React.FunctionComponent<React.PropsWithChildren<{}>> = ({
  children,
}) => (
  <div style={style()}>{children}</div>
);

export default Title;
