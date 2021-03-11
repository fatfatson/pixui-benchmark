const helper = require('@/lib/helper')

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');

    /* 100个 无样式div */
    let $div = document.createElement('div');
    $app.appendChild($div);
    let $parent = $div;
    for (let i = 0; i < 100; i++) {
      $div = document.createElement('div');
      $parent.appendChild($div);
      $parent = $div;
    }
  },
}
