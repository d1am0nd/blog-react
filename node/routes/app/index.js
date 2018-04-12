import {Router} from 'express';
import {renderHtml} from './html';
import routes from './../../../src/js/components/Routes';
import {matchPath} from 'react-router';
import {
  Meta,
  defaultTitle,
  defaultDescription,
} from './../../../src/js/meta/meta';
import {newServerStore} from './../../../src/js/store';

const router = Router();
const store = newServerStore();
const findComp = (url) => routes.find((r) => matchPath(
  url, {path: r.props.path, exact: r.props.exact}
));

const renderWithFetch = (req, res) => {
  const Comp = findComp(req.url);

  Comp.props.component.fetchData(store, req.url)
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
  const Comp = findComp(req.url);
  const preloadedState = store.getState();

  Meta.setTitle(Comp.props.component.title());
  Meta.setDescription(Comp.props.component.summary());

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
