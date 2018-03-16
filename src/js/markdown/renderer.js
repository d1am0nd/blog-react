import marked from 'marked';

import link from './link';
import code from './code';
import image from './image';

const renderer = new marked.Renderer();

// Add _blank to links
renderer.link = link(renderer);
renderer.code = code(renderer);
renderer.image = image(renderer);

export default renderer;
