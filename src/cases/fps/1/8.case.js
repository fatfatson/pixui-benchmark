const helper = require('@/lib/helper');

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    /* 每16ms，执行 * 300：1. appendChild div（不可见） */
    const $app = document.getElementById('app');
    const repeatCount = 400;

    const $div = document.createElement('div');

    helper.runTimer(() => {
      for (let i = 0; i < repeatCount; i++) {
        $app.appendChild($div);
      }
    }, 16);
  },
};
