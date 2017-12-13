import config from '../../../config/page.json';

class MetaConst {
  constructor() {
    this._defaultTitle = config.meta_title;
    this._separator = ' | ';
    this._meta = {
      title: '',
      desc: '',
      img: '',
    };
  }

  getTitle() {
    return this._meta.title;
  }

  getDescription() {
    return this._meta.desc;
  }

  getImage() {
    return this._meta.img;
  }

  setTitle(title) {
    if (!title) {
      this._meta.title = this._defaultTitle;
    } else {
      this._meta.title = title + this._separator + this._defaultTitle;
    }

    if (typeof document === 'undefined') return;
    document
      .getElementById('meta-title')
      .innerHTML = this._meta.title;
    document
      .getElementById('meta-og-title')
      .setAttribute('content', this._meta.title);
  }

  setDescription(desc) {
    if (!desc) {
      this._meta.desc = config.meta_title;
    } else {
      this._meta.desc = desc;
    }

    if (typeof document === 'undefined') return;
    document
      .getElementById('meta-description')
      .setAttribute('content', this._meta.desc);
    document
      .getElementById('meta-og-description')
      .setAttribute('content', this._meta.desc);
  }

  setImage(img) {
    if (!image) {
      this._meta.img = '';
    } else {
      this._meta.img = img;
    }

    if (typeof document === 'undefined') return;
    document
      .getElementById('meta-og-image')
      .setAttribute('content', this._meta.img);
  }
};

const defaultTitle = config.meta_title;
const defaultDescription = config.meta_description;
const Meta = new MetaConst();
export {
  Meta,
  defaultTitle,
  defaultDescription,
};
