import marked from 'marked';

import link from './link';

const renderer = new marked.Renderer();

// Add _blank to links
renderer.link = () => link(renderer);

export default renderer;
