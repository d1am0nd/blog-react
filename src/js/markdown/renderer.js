import marked from 'marked';

import link from './link';
import code from './code';

const renderer = new marked.Renderer();

// Add _blank to links
renderer.link = link(renderer);
renderer.code = code(renderer);

export default renderer;
