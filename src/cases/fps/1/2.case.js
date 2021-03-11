const helper = require('@/lib/helper')

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    /* appendChild div 10000次 */
    const $app = document.getElementById('app');
    let $div = document.createElement('div');

    for (let i = 0; i < 10000; i++) {
      $app.appendChild($div);
    }
  },
}
