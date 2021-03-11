const { runTimer } = require('./helper')
const { genFragment } = require('@/lib/helper')


exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');


    /* 100个div+text，display 每7s自动隐藏展开 */
    let $container = genFragment();
    $app.appendChild($container);
    let isShow = true;
    setTimeout(() => {
      runTimer(() => {
        $container.style.display = isShow ? 'none' : 'flex';
        isShow = !isShow;
      }, 7000)
    }, 10000);
  },
}
