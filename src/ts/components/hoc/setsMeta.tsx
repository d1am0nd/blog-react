import * as React from 'react';

export interface IMeta<P = any> {
  title: (props?: P) => string;
  description: (props?: P) => string;
  url: (props?: P) => string;
};

const setsMeta = ({
  title,
}: IMeta) => (
  Component: React.ComponentType
) => {
  const SetsMeta: React.FC<any> = (
    props
  ) => {
    if (typeof document !== 'undefined') {
      document.title = `${title(props)} - Dev Kordes`;
    }

    return (
      <Component {...props} />
    );
  };

  return SetsMeta;
};

export default setsMeta;
