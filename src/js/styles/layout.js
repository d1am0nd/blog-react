export default class LayoutStyle {
  constructor() {
    this.nums = {
      base: {
        w: 600,
      },
    };

    this.styles = {
      base: {
        width: this.nums.base.w + 'px',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    };
  }

  layoutStyles() {
    return this.styles.base;
  }
};
