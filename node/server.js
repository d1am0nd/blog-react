import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import App from "../src/js/Server";
import Test from "../src/js/components/Test";
import store from '../src/js/store';
import { matchRoutes, renderRoutes } from 'react-router-config';
import routes from '../src/js/components/Routes';
const app = express();

app.use(express.static("../public"));

app.get("*", (req, res) => {
  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({route}) => {
    let fetchData = route.props.component.fetchData;
    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
  });
  Promise.all(promises)
    .then((data) => {
      console.log('DOOOOOOOOOOOOOOOOOOOOONE');
    })
    .catch(err => {
      console.log('ERRRRRRRRRRRRRRRRRRRRRRRRRR');
    });

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
        <div id="root">
        ${renderToString(
          <App
            store={store}
            context={{}}
            radiumConfig={{userAgent: req.headers['user-agent']}}
            location={req.url}/>
        )}
        </div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(process.env.PORT || 3002, () => {
  console.log("Server is listening");
});
