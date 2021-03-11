const helper = require('@/lib/helper')

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');

    /* text 带文字 * 10000字（不换行）） */
    let $div = document.createElement('text');
    $div.className = 'nowrap';
    let $textnode = document.createTextNode(helper.genText(10000));
    $div.appendChild($textnode);

    $app.appendChild($div);
  },
}