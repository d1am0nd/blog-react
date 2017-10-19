export default class layout {
  constructor() {
    const handh = 68;
    const handw = 480;
    const myhw = 600;
    this.nums = {
      h: 600,
      w: 600,
      hand: {
        bmar: 0,
        smar: 60,
        h: 60,
        w: 480,
      },
      mhand: {
        tmar: 20,
      },
      hcard: {
        wmar: 0,
        hmar: 0,
        h: handh,
        w: (handw / 13),
        sel: 30,
        play: 10,
      },
      mcard: {
        wmar: 0,
        hmar: 0,
        h: handh,
        w: (myhw / 13),
        sel: 30,
        play: 10,
      },
      pcard: {
        bot: 50,
        w: 172,
        h: 250,
      },
    };

    this.styles = {
      board: {
        height: this.nums.h + 'px',
        width: this.nums.w + 'px',
      },
      myHand: {
        base: {
          'width': '100%',
          'position': 'relative',
          'display': 'flex',
          'flexDirection': 'row',
        },
      },
      myCard: {
        base: {
          'width': this.nums.mcard.w + 'px',
          'height': this.nums.mcard.h + 'px',
          // height: '100%',
          'position': 'relative',
          'display': 'inline-block',
          ':hover': {
            color: 'red',
            cursor: 'pointer',
          },
        },
      },
      handCard: {
        base: {
          'position': 'absolute',
          'border': 'solid 1px',
          ':hover': {
            color: 'red',
            cursor: 'pointer',
          },
        },
        handMargin: this.nums.hcard.hmar + 'px',
        cardMargin: this.nums.hcard.smar + 'px',
        width: this.nums.hcard.w + 'px',
        height: this.nums.hcard.h + 'px',
      },
      pileCard: {
        base: {
          'position': 'absolute',
          'border': 'solid 1px',
          'width': this.nums.pcard.w + 'px',
          'height': this.nums.pcard.h + 'px',
        },
        boardMargin: this.nums.pcard.bot + 'px',
        width: this.nums.pcard.w + 'px',
        height: this.nums.pcard.h + 'px',
      },
      hand: {
        base: {
          position: 'absolute',
          border: 'solid 1px',
        },
        boardMargin: this.nums.hand.bmar + 'px',
        sideMargin: this.nums.hand.smar + 'px',
        width: this.nums.hand.w + 'px',
        height: this.nums.hand.h + 'px',
      },
    };
  }

  myCard() {
    let style = {};
    Object.assign(style, this.styles.myCard.base);
    return style;
  }

  myHand() {
    let style = {};
    Object.assign(style, this.styles.myHand.base);
    return style;
  }

  pileCard(i) {
    let style = {};
    Object.assign(style, this.styles.pileCard.base);
    let base = {};
    Object.assign(base, this.styles.pileCard);
    if (i % 2 === 0) {
      let center = this.nums.w - (this.nums.w + this.nums.pcard.w) / 2;
      style.left = center + 'px';
    } else {
      let center = this.nums.h - (this.nums.h + this.nums.pcard.h) / 2;
      style.top = center + 'px';
    }

    if (i === 0) {
      style.bottom = '0px';
    } else if (i === 1) {
      style.left = '0px';
    } else if (i === 2) {
      style.top = '0px';
    } else if (i === 3) {
      style.right = '0px';
    }
    return style;
  }

  handCard(pi, ci, playable = false, selected = false) {
    let style = {};
    Object.assign(style, this.styles.handCard.base);
    let base = {};
    Object.assign(base, this.styles.handCard);

    let posx = this.nums.hcard.w * ci;
    let posy = 0;
    if (playable === true) {
      posy = this.nums.hcard.play;
    }
    if (selected === true) {
      posy = this.nums.hcard.sel;
    }

    if (pi % 2 == 0) {
      style.height = base.height;
      style.width = base.width;
      style.left = posx + 'px';
    } else {
      style.width = base.height;
      style.height = base.width;
      style.top = posx + 'px';
    }

    if (pi === 0) {
      style.bottom = posy + 'px';
    } else if (pi === 1) {
      style.left = posy + 'px';
    } else if (pi === 2) {
      style.top = posy + 'px';
    } else if (pi === 3) {
      style.right = posy + 'px';
    }

    return style;
  }

  hand(i) {
    let style = {};
    Object.assign(style, this.styles.hand.base);
    let base = {};
    Object.assign(base, this.styles.hand);

    // Horizontal
    if (i % 2 == 0) {
      style.height = base.height;
      style.width = base.width;
      style.left = base.sideMargin;
    } else {
      style.width = base.height;
      style.height = base.width;
      style.top = base.sideMargin;
    }
    // Bottom
    if (i == 0) {
      style.bottom = base.boardMargin;
    }
    // Left
    if (i == 1) {
      style.left = base.boardMargin;
    }
    // Top
    if (i == 2) {
      style.top = base.boardMargin;
    }
    // Right
    if (i == 3) {
      style.right = base.boardMargin;
    }
    return style;
  }
};
