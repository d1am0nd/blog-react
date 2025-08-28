import * as React from 'react';
import {renderToString} from "react-dom/server";
import {ServerStyleSheet} from 'styled-components'
import App from '../../../src/ts/Server';

export const renderHtml = (
  meta: {
    title: string,
    description: string,
    url: string,
  },
  preloadedState = {}
) => {
  const sheet = new ServerStyleSheet();
  const rendered = renderToString(sheet.collectStyles(<App location={meta.url} context={{...preloadedState}} />));
  const styleTags = sheet.getStyleTags();

  sheet.seal();

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="author" content="Dev Kordeš">

      <meta id="meta-description" name="description" content="${meta.description}">
      <title id='meta-title'>${meta.title}</title>
      <link id='meta-canonical' rel="canonical" href="https://kordes.dev${meta.url}" />
      <!-- Disable tap highlight on IE -->
      <meta name="msapplication-tap-highlight" content="no">

      <meta property='og:type' content='website' />
      <meta name="theme-color" content="#E5E5E5"/>
      <style>
        code {
          background-color: rgba(0,0,0,.05);
          padding: .3rem .5rem;
          border-radius: 3px
        }
      </style>
      ${styleTags}
    </head>
    <body class="landing">
        <div id="root">${rendered}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script async src="/js/app.js"></script>
        <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/default.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/default.min.css"></noscript>
    </body>
    </html>
  `;

  return html;
};
