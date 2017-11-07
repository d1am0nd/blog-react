class Meta {
  constructor() {
    this.defaultTitle = 'My Programming Blog';
    this.separator = ' | ';
    this.meta = {
      title: '',
      desc: '',
      img: '',
    };

    this.setTitle(null);
  }

  setTitle(title) {
    if (!title) {
      this.meta.title = this.defaultTitle;
    } else {
      this.meta.title = title + this.separator + this.defaultTitle;
    }

    document
      .getElementById('meta-title')
      .innerHTML = this.meta.title;
    document
      .getElementById('meta-og-title')
      .setAttribute('content', this.meta.title);
  }

  setDescription(desc) {
    if (!desc) {
      this.meta.desc = 'My programming blog';
    } else {
      this.meta.desc = desc;
    }

    document
      .getElementById('meta-description')
      .setAttribute('content', this.meta.desc);
    document
      .getElementById('meta-og-description')
      .setAttribute('content', this.meta.desc);
  }

  setImage(img) {
    if (!image) {
      this.meta.img = '';
    } else {
      this.meta.img = img;
    }

    document
      .getElementById('meta-og-image')
      .setAttribute('content', this.meta.img);
  }
};

export default new Meta();
