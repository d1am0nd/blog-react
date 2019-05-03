import * as express from 'express';
import adminRouter from './routes/admin';
import sitemapRouter from './routes/sitemap';
import appRouter from './routes/app';

const app = express();

const router = express.Router();

app.use(express.static('./public'));
app.use('/admin', adminRouter);
app.use('/sitemap.xml', sitemapRouter);
app.use('/', appRouter);

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
