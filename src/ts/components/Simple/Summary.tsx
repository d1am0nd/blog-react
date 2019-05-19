import * as React from 'react';

const styles = () => ({
  fontSize: '18px',
  marginTop: 0,
  marginBottom: '5px',
});

const Summary: React.FunctionComponent = ({
  children,
}) => (
  <p style={styles()}>{children}</p>
);

export default Summary;
