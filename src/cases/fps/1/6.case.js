const helper = require('@/lib/helper');

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    /* createElement div 16ms/1次 */
    const $app = document.getElementById('app');
    const repeatCount = 20;

    const doms = [];

    for (let i = 0; i < repeatCount; i++) {
      const $div = document.createElement('div');
      const $textnode = document.createTextNode(`${Math.random()}`);
      $div.appendChild($textnode);
      $app.appendChild($div);

      doms.push($div);
    }

    helper.runTimer(() => {
      for (let i = 0; i < repeatCount; i++) {
        doms[i].childNodes[0].data = `${Math.random()}`;
      }
    }, 16);
  },
};
