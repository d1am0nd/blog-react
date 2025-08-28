import * as React from 'react';

const Submit: React.FC<{children: React.ReactNode}> = ({
  children,
}) => (
  <button type='submit'>{children}</button>
);

export default Submit;
