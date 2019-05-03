import React from 'react';
import {renderToString} from "react-dom/server";

import client from '../../../config/client';
import App from '../../../src/js/Server';

const renderHtml = (store, preloadedState, req, Meta) => {
  const sv = client.google_site_verification ?
      `<meta name="google-site-verification" content="${client.google_site_verification}"/>` : ``;
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="author" content="Dev Kordeš">
      <link id='link-canonical' rel="canonical" href="https://kordes.dev${req.path}" />
      ${sv}
      <!-- Disable tap highlight on IE -->
      <meta name="msapplication-tap-highlight" content="no">

      <!-- Web Application Manifest -->
      <link rel="manifest" href="manifest.json">

      <!-- Add to homescreen for Chrome on Android -->
      <meta name="mobile-web-app-capable" content="yes">
      <meta name="application-name" content='${Meta.getTitle()}'>
      <link rel="icon" sizes="192x192" href="img/icons/mpb-icon192.png">

      <!-- Add to homescreen for Safari on iOS -->
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black">
      <meta name="apple-mobile-web-app-title" content='${Meta.getTitle()}'>
      <link rel="apple-touch-icon" href="img/icons/mpb-icon152.png">

      <!-- Tile icon for Win8 (144x144 + tile color) -->
      <meta name="msapplication-TileImage" content="img/icons/mpb-icon144.png">
      <meta name="msapplication-TileColor" content="#333333">
      <meta http-equiv='content-type' content='text/html; charset=utf-8' />
      <title id='meta-title'>${Meta.getTitle()}</title>
      <meta id='meta-og-title' property='og:title' content='${Meta.getTitle()}' />
      <meta id='meta-description' name='description' content='${Meta.getDescription()}'/>
      <meta id='meta-og-description' property='og:description' content='${Meta.getDescription()}'/>
      <meta id='meta-og-image' property='og:image' content='${Meta.getImage()}' />
      <meta property='og:type' content='website' />
      <meta name="theme-color" content="#E5E5E5"/>
    </head>
    <body class="landing">
        <div id="root">${renderToString(
          <App
            store={store}
            context={{}}
            radiumConfig={{userAgent: req.headers['user-agent']}}
            location={req.url}/>
        )}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script async src="/js/app.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    </body>
    </html>
  `;
};

export {renderHtml};
