import * as React from 'react';

const Label: React.FC<{children: React.ReactNode}> = ({
  children,
}) => (
  <label>{children}</label>
);

export default Label;
