import {Router} from 'express';
import {createSitemap} from './sitemap';

const router = Router();

/* GET sitemap */
router.get('/', (req, res, next) => {
  createSitemap()
    .then((xml) => {
      res.header('Content-Type', 'application/xml');
      res.send(xml);
    })
    .catch((err) => {
      res.send('Error');
    });
});

export default router;
