import * as React from 'react';

const Submit: React.FunctionComponent<React.PropsWithChildren<{}>> = ({
  children,
}) => (
  <button type='submit'>{children}</button>
);

export default Submit;
