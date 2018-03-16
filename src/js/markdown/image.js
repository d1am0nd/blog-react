import React from 'react';
import Img from 'components/Simple/Img';
import {renderToString} from 'react-dom/server';

const image = (renderer) => (src, title, text) => {
  const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  if (renderer.options.baseUrl && !originIndependentUrl.test(src)) {
    src = resolveUrl(renderer.options.baseUrl, src);
  }

  return renderToString(
    <Img
      src={src}
      title={title}
      alt={text}/>
  );
};

export default image;
