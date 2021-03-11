const helper = require('@/lib/helper')

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');

    /* 10000个 宽高100*100 背景色 div */
    for (let i = 0; i < 10000; i++) {
      let $div = document.createElement('div');
      $div.className = 'box_color';
      $app.appendChild($div);
    }
  },
}
