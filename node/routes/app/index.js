import {Router} from 'express';
import {renderHtml} from './html';
import {matchPath} from 'react-router';
import {
  Meta,
  defaultTitle,
  defaultDescription,
} from '@/meta/meta';
import {routes} from '@/routes';
import {newServerStore} from '@/store';

const router = Router();
const store = newServerStore();
const findComp = (url) => routes.find((r) => matchPath(
  url, {path: r.path, exact: true}
));

const renderWithFetch = (req, res) => {
  const Comp = findComp(req.url).component;

  Comp.fetchData(store, req.url)
    .then((data) => {
      Meta.setTitle(defaultTitle);
      Meta.setDescription(defaultDescription);
      res.send(renderHtml(
        store, store.getState(), req, Meta
      ));
    })
    .catch((err) => {
      res.status(404).send('404');
    });
};

const renderStatic = (req, res) => {
  const Comp = findComp(req.url).component;
  const preloadedState = store.getState();

  Meta.setTitle(Comp.title());
  Meta.setDescription(Comp.summary());

  res.send(renderHtml(
    store, preloadedState, req, Meta
  ));
};

router.get('/', renderWithFetch);
router.get('/posts/:slug', renderWithFetch);
router.get('/about-me', renderStatic);
router.get('/my-projects', renderWithFetch);

router.get('*', (req, res) => {
  res.status(404).send('404');
});

export default router;
