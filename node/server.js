import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import App from "../src/js/Server";
import store from '../src/js/store';
import {matchPath} from 'react-router';
import routes from '../src/js/components/Routes';
const app = express();

app.use(express.static('./public'));

app.get("*", (req, res) => {
  const matched = routes.find(r => {
    if (matchPath(req.url, {path: r.props.path, exact: r.props.exact})) {
      let fetchData = r.props.component.fetchData;
      return fetchData instanceof Function ?
        fetchData(store, req.url) : Promise.resolve(null);
    }
  });
  let promises = []
  if (typeof matched !== 'undefined') {
    let fetchData = matched.props.component.fetchData;
    promises.push(matched.props.component.fetchData(store, req.url));
  }

  Promise.all(promises)
    .then((data) => {
      let preloadedState = store.getState();
      let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">

            <meta http-equiv="content-type" content="text/html; charset=utf-8" />
            <title id="meta-title"></title>
            <meta id="meta-og-title" property="og:title" content="" />
            <meta id="meta-description" name="description" content=""/>
            <meta id="meta-og-description" property="og:description" content=""/>
            <meta id="meta-og-image" property="og:image" content="" />
            <meta property="og:type" content="website" />
            <!--[if lte IE 8]><script src="/css/ie/html5shiv.js"></script><![endif]-->
            <!-- <script src="/js/all_libs.js"></script> -->
            <!-- <link rel="stylesheet" type="text/css" href="/vendor/bootstrap-3.3.7/css/bootstrap.min.css"/> -->
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
        </body>
        </html>
      `;
      res.send(html);
    });

});

let port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log("Server is listening on", port);
});
