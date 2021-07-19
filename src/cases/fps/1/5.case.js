const helper = require('@/lib/helper');

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    /* createElement div 16ms/1次 */
    const $app = document.getElementById('app');

    let doms = [];

    helper.runTimer(() => {
      if (doms.length) {
        doms.forEach((dom) => {
          $app.removeChild(dom);
        });
        doms = [];
      } else {
        for (let i = 0; i < 4; i++) {
          // $div = document.createElement('div');
          // $div.className = 'box_color';
          // $app.appendChild($div);
          // doms.push($div);
        }
      }
    }, 16);
  },
};
