const helper = require('@/lib/helper')

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');

    $app.style.justifyContent = 'flex-start'
    $app.style.alignItems = 'flex-start'

    const text = helper.genText(100);
    let $div = document.createElement('text');
    $div.className = 'wrap';
    let $textnode = document.createTextNode(text);
    $div.appendChild($textnode);

    $app.appendChild($div);

    helper.runTimer(() => {
      $textnode.data = Math.random() + text;
    }, 16)
  },
}
