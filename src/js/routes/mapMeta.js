import {getPost} from '@/store/selectors/posts';

const getHomeTitle = () => 'Home';
const getHomeDesc = () => 'My journey to becoming a better web developer.' +
  'And many cool side projects and opinionated stories in between.';

const getPostTitle = (store) => getPost(store).title;
const getPostDesc = (store) => getPost(store).summary;

const getProjectsTitle = () => 'My projects';
const getProjectsDesc = () => 'My side projects';

const getAboutTitle = () => 'About me';
const getAboutDesc = () => 'Dev Kordeš - 24 year old full stack developer ' +
  'with huge preference for backend and modern SPA frameworks over ' +
  'CSS and jQuery.';

export {
  getHomeTitle,
  getHomeDesc,

  getPostTitle,
  getPostDesc,

  getProjectsTitle,
  getProjectsDesc,

  getAboutTitle,
  getAboutDesc,
};
