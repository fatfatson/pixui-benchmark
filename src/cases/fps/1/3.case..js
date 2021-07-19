const helper = require('@/lib/helper');

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    /*  insertBefore div 10000次 */
    const $div = document.createElement('div');

    for (let i = 0; i < 10000; i++) {
      // $app.insertBefore($div);
    }
  },
};
