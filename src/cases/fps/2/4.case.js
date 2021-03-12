const helper = require('@/lib/helper')

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');
    let $parent = document.createElement('div');
    $app.appendChild($parent);
    
    for (let i = 0; i < 500 - 1; i++) {
      let $div = document.createElement('div');
      $parent.appendChild($div);
      $parent = $div;
    }
  },
}
