import React from 'react';
import Code from '@/components/Simple/Code';
import {renderToString} from 'react-dom/server';
import highlightjs from 'highlight.js';

const code = (renderer) => (inputcode, lang, escaped) => {
  // Check whether the given language is valid for highlight.js.
  const validLang = !!(lang && highlightjs.getLanguage(lang));
  // Highlight only if the language is valid.
  const out = validLang ?
    highlightjs.highlight(lang, inputcode).value : inputcode;

  return renderToString(
    <Code renderHtml={validLang} lang={lang}>
      {out}
    </Code>
  );
};

export default code;
