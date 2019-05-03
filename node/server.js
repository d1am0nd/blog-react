import express from 'express';

import adminRouter from './routes/admin';
import sitemapRouter from './routes/sitemap';
import appRouter from './routes/app';

const app = express();

app.use(express.static('./public'));
app.use('/admin', adminRouter);
app.use('/sitemap.xml', sitemapRouter);
app.use('/', appRouter);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log("Server is listening on", port);
});

function fourOhFour(res) {
  res.status(404).send('404');
}
