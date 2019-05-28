import * as React from 'react';

export interface IMeta<P = any> {
  title: (props?: P) => string;
  description: (props?: P) => string;
  url: (props?: P) => string;
};

const setsMeta = ({
  title,
  description,
}: IMeta) => (
  Component: React.ComponentType
) => {
  const SetsMeta: React.FunctionComponent<any> = (
    props
  ) => {
    if (typeof document !== 'undefined') {
      document
        .getElementById('meta-title')
        .setAttribute('content', title(props));
      document
        .getElementById('meta-description')
        .setAttribute('content', description(props));
    }

    return (
      <Component {...props} />
    );
  };

  return SetsMeta;
};

export default setsMeta;
