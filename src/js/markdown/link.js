// Add _blank to links
const link = (renderer) => (href, title, text) => {
  if (renderer.options.sanitize) {
    let prot = '';
    try {
      prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toString()
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  return `
    <a href="${href}"
      target="_blank"
      rel="noopener"
      title="${title ? title : ''}">
      ${text}
    </a>
  `;
};

export default link;
