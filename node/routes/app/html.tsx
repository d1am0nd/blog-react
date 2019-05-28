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

      <!-- Web Application Manifest -->
      <link rel="manifest" href="manifest.json">

      <!-- Add to homescreen for Chrome on Android -->
      <meta name="mobile-web-app-capable" content="yes">
      <link rel="icon" sizes="192x192" href="img/icons/mpb-icon192.png">

      <!-- Add to homescreen for Safari on iOS -->
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black">
      <link rel="apple-touch-icon" href="img/icons/mpb-icon152.png">

      <!-- Tile icon for Win8 (144x144 + tile color) -->
      <meta name="msapplication-TileImage" content="img/icons/mpb-icon144.png">
      <meta name="msapplication-TileColor" content="#333333">
      <meta http-equiv='content-type' content='text/html; charset=utf-8' />
      <meta property='og:type' content='website' />
      <meta name="theme-color" content="#E5E5E5"/>
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
        <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/monokai.min.css" rel="stylesheet">
    </body>
    </html>
  `;
};
