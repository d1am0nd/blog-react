import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import App from "./../src/js/Server";
import {newServerStore} from './../src/js/store';
import {matchPath} from 'react-router';
import routes from './../src/js/components/Routes';
import {Meta, defaultTitle, defaultDescription} from './../src/js/meta/meta';
import client from './../config/client.json';

import {createSitemap} from './sitemap';

const app = express();

app.use(express.static('./public'));

app.get("*", (req, res) => {
  if (req.url.startsWith('/admin')) {
    res.sendFile(`${__dirname}/public/admin.html`);
    return;
  }
  if (req.url === '/sitemap.xml') {
    createSitemap()
      .then(xml => {
        res.header('Content-Type', 'application/xml');
        res.send(xml);
      })
      .catch(err => {
        fourOhFour(res);
      });
    return;
  }
  const matched = routes.find(r => {
    if (matchPath(req.url, {path: r.props.path, exact: r.props.exact})) {
      return true;
    }
    return false;
  });
  if (!matched) {
    fourOhFour(res);
    return;
  }

  const store = newServerStore();
  let promises = [];
  if (typeof matched.props.component.fetchData !== 'undefined') {
    promises.push(matched.props.component.fetchData(store, req.url));
  }

  Promise.all(promises)
    .then((data) => {
      let preloadedState = store.getState();
      if (!matched) {
        reject(404);
      }
      const path = matched.props.path;
      if (path === '/') {
        // Home
        Meta.setTitle(defaultTitle);
        Meta.setDescription(defaultDescription);
      } else if (path === '/posts/:slug') {
        // Single post
        Meta.setTitle(preloadedState.posts.post.title);
        Meta.setDescription(preloadedState.posts.post.summary);
      } else if (path === '/about-me') {
        // About me
        Meta.setTitle(matched.props.component.title());
        Meta.setDescription(matched.props.component.summary());
      } else if (path === '/my-projects') {
        // Projects
        Meta.setTitle(matched.props.component.title());
        Meta.setDescription(matched.props.component.summary());
      }
      let html = renderHtml(store, preloadedState, req, Meta);
      res.send(html);
    })
    .catch(err => {
      console.log(err);
      fourOhFour(res);
    });
});

let port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log("Server is listening on", port);
});

function fourOhFour(res) {
  res.status(404).send('404');
}

function renderHtml(store, preloadedState, req, Meta) {
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
}
