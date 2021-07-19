const helper = require('@/lib/helper');

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');

    $app.style.justifyContent = 'flex-start';
    $app.style.alignItems = 'flex-start';

    /* text 带文字 * 4000字（换行）） */
    const $div = document.createElement('text');
    $div.className = 'wrap';
    const $textnode = document.createTextNode(helper.genText(4000));
    $div.appendChild($textnode);

    $app.appendChild($div);
  },
};
