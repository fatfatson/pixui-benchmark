const helper = require('@/lib/helper');

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    /* 4. insertBefore div 10000次 */
    const $div = document.createElement('div');
    $div.appendChild(document.createTextNode('1'));
    // $app.appendChild($div);

    for (let i = 0; i < 10000; i++) {
      $div.childNodes[0].data = `${i}`;
    }
  },
};
