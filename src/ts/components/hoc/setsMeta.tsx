import * as React from 'react';
import {Helmet} from 'react-helmet';

export interface IMeta<P = undefined> {
  title: (props?: P) => string;
  description: (props?: P) => string;
  url: (props?: P) => string;
};

const setsMeta = ({
  title,
  description,
  url,
}: IMeta) => (
  Component: React.ComponentType
) => {
  const SetsMeta: React.FunctionComponent<any> = (
    props
  ) => {
    return (
      <>
        <Helmet>
          <title>{title(props)}</title>
          <meta
            name="description"
            content={description(props)} />
          <link
            rel="canonical"
            href={`https://kordes.dev${url(props)}`} />
        </Helmet>
        <Component {...props} />
      </>
    );
  };

  return SetsMeta;
};

export default setsMeta;
