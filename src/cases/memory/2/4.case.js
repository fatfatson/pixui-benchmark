const helper = require('@/lib/helper')

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');


    /* 10000个 宽高100*100 透明 div */
    let $div = document.createElement('div');
    $div.className = 'box_transparent';
    $app.appendChild($div);
    let $parent = $div;
    for (let i = 0; i < 10000; i++) {
      $div = document.createElement('div');
      $div.className = 'box_transparent';
      $parent.appendChild($div);
      $parent = $div;
    }
  },
}
