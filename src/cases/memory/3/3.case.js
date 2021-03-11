const helper = require('@/lib/helper')

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');

    /* text 带文字 * 1000字（换行）） */
    let $div = document.createElement('text');
    $div.className = 'wrap';
    let $textnode = document.createTextNode(helper.genText(1000));
    $div.appendChild($textnode);

    $app.appendChild($div);
  },
}
