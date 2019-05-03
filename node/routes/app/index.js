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
const findRoute = (url) => routes.find((r) => matchPath(
  url, {path: r.path, exact: true}
));

const renderWithFetch = (req, res) => {
  const route = findRoute(req.path);
  if (!route) {
      res.status(404).send('404');
  }

  const {title, description} = route.meta;

  // Fetch data
  store.dispatch(
    route.fetchMethod(req.params)
  )
    .then((data) => {
      // Get preloaded state
      const preloadedState = store.getState();
      // Set meta tags
      Meta.setTitle(title(preloadedState));
      Meta.setDescription(description(preloadedState));
      // Render html
      res.send(renderHtml(
        store, store.getState(), req, Meta
      ));
    })
    .catch((err) => {
      res.status(404).send('404');
    });
};

const renderStatic = (req, res) => {
  const route = findRoute(req.path);
  const preloadedState = store.getState();
  const {title, description} = route.meta;

  Meta.setTitle(title(preloadedState));
  Meta.setDescription(description(preloadedState));

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
