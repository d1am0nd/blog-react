import * as express from 'express';
import {routes, setsMeta} from '../../../src/ts/misc/routes';
import {renderHtml} from './html';
import {matchPath} from 'react-router';

const router = express.Router();
const findRoute = (url: string) => routes.find(({path}) => !!matchPath(
  url,
  {path, exact: true}
));

const renderWithFetch = async (
  req: express.Request,
  res: express.Response
) => {
  const {requests, setMeta<any>} = findRoute(req.url);

  const state = (await Promise.all(
    (requests || []).map(({request}) => request(req.params))
  ))
    .reduce((carry, {data}, i) => ({
      ...carry,
      [requests[i].paramName]: data,
    }), {});

  const meta = {
    title: `${setMeta.title(state)} - Dev Kordes`,
    description: setMeta.description(state),
    url: req.url,
  };

  res.send(renderHtml(
    meta,
    state
  ));
};

router.get('/', renderWithFetch);
router.get('/posts/:slug', renderWithFetch);
router.get('/about-me', renderWithFetch);
router.get('/my-projects', renderWithFetch);

router.get('*', (req, res) => {
  res.status(404).send('404');
});

export default router;
