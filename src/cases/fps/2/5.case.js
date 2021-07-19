const helper = require('@/lib/helper');

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');
    let $parent = document.createElement('div');
    $app.appendChild($parent);

    for (let i = 0; i < 100 - 1; i++) {
      const $div = document.createElement('div');
      $div.className = 'box_color';
      $parent.appendChild($div);
      $parent = $div;
    }
  },
};
