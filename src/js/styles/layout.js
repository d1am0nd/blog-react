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

        /*
        borderLeft: '1px solid black',
        borderRight: '1px solid black',
        */
      },
    };
  }

  layoutStyles() {
    return this.styles.base;
  }
};
