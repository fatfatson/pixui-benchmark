const helper = require('@/lib/helper');

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    /* createElement div 10000次 */
    for (let i = 0; i < 10000; i++) {
      document.createElement('div');
    }
  },
};
