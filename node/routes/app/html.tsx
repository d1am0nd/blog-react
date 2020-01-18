import * as React from 'react';
import {renderToString} from "react-dom/server";
import App from '../../../src/ts/Server';

export const renderHtml = (
  meta: {
    title: string,
    description: string,
    url: string,
  },
  preloadedState = {}
) => {
  return `
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
    </head>
    <body class="landing">
        <div id="root">${renderToString(
          <App location={meta.url} context={{...preloadedState}} />
        )}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script async src="/js/app.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/default.min.css" rel="stylesheet">
    </body>
    </html>
  `;
};
