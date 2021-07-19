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

    const text = helper.genChinese(100);
    const $div = document.createElement('text');
    $div.className = 'wrap';
    const $textnode = document.createTextNode(text);
    $div.appendChild($textnode);

    $app.appendChild($div);

    helper.runTimer(() => {
      $textnode.data = helper.genChinese(100);
    }, 16);
  },
};
