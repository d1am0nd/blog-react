import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import App from "../src/js/Server";
import store from '../src/js/store';
import {matchPath} from 'react-router';
import routes from '../src/js/components/Routes';
import {Meta, defaultTitle, defaultDescription} from '../src/js/meta/meta';

const app = express();

app.use(express.static('./public'));

app.get("*", (req, res) => {
  const matched = routes.find(r => {
    if (matchPath(req.url, {path: r.props.path, exact: r.props.exact})) {
      let fetchData = r.props.component.fetchData;
      return fetchData instanceof Function ?
        true : false;
    }
    return false;
  });
  let promises = []
  if (typeof matched !== 'undefined') {
    let fetchData = matched.props.component.fetchData;
    promises.push(matched.props.component.fetchData(store, req.url));
  }

  Promise.all(promises)
    .then((data) => {
      let preloadedState = store.getState();
      if (matched) {
        const path = matched.props.path;
        if (path === '/') {
          Meta.setTitle(defaultTitle);
          Meta.setDescription(defaultDescription);
        } else if (path === '/posts/:slug') {
          Meta.setTitle(preloadedState.posts.post.title);
          Meta.setDescription(preloadedState.posts.post.summary);
        }
      }
      let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">

            <meta http-equiv="content-type" content="text/html; charset=utf-8" />
            <title id="meta-title">${Meta.getTitle()}</title>
            <meta id="meta-og-title" property="og:title" content="${Meta.getTitle()}" />
            <meta id="meta-description" name="description" content="${Meta.getDescription()}"/>
            <meta id="meta-og-description" property="og:description" content="${Meta.getDescription()}"/>
            <meta id="meta-og-image" property="og:image" content="${Meta.getImage()}" />
            <meta property="og:type" content="website" />
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
      res.send(html);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });

});

let port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log("Server is listening on", port);
});
