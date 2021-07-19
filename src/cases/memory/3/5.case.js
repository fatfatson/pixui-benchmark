const helper = require('@/lib/helper');

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');

    /* text 带文字 * 4000字（不换行）） */
    const $div = document.createElement('text');
    $div.className = 'nowrap';
    const $textnode = document.createTextNode(helper.genText(4000));
    $div.appendChild($textnode);

    $app.appendChild($div);
  },
};
