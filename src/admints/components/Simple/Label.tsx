import * as React from 'react';

const Label: React.FunctionComponent<React.PropsWithChildren<{}>> = ({
  children,
}) => (
  <label>{children}</label>
);

export default Label;
