import marked from 'marked';

let renderer = new marked.Renderer();

// Add _blank to links
renderer.link = (href, title, text) => {
  if (renderer.options.sanitize) {
    let prot = '';
    try {
      prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  let out = '<a href="' + href + '"';
  out += ' target="_blank"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

export default renderer;
