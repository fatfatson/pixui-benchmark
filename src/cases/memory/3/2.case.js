const helper = require('@/lib/helper');

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');

    /* text 带文字 * 1000字（不换行）） */
    const $div = document.createElement('text');
    $div.className = 'nowrap';
    const $textnode = document.createTextNode(helper.genText(1000));
    $div.appendChild($textnode);

    $app.appendChild($div);
  },
};
