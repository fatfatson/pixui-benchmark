const helper = require('@/lib/helper')

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    /* createElement div 16ms/1次 */
    const $app = document.getElementById('app');
    const repeatCount = 20;

    let doms = [];

    for (let i = 0; i < repeatCount; i++) {
      let $div = document.createElement('div');
      let $textnode = document.createTextNode('' + Math.random());
      $div.appendChild($textnode);
      $app.appendChild($div);

      doms.push($div);
    }


    helper.runTimer(() => {
      for (let i = 0; i < repeatCount; i++) {
        doms[i].childNodes[0].data = '' + Math.random();
      }
    }, 16);
  },
}
