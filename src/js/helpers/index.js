export default {
  validateYyyyMmDd(string) {
    let r = string.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (r === null) {
      return false;
    }
    let d = new Date(string);
    if (Object.prototype.toString.call(d) === '[object Date]') {
      // it is a date
      if (!isNaN(d.getTime())) { // d.valueOf() could also work
        return true;
      }
    }
    return false;
  },
  slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  },
};
