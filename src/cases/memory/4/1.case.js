const { runTimer } = require('./helper')
const { genFragment } = require('@/lib/helper')


exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');


    /* 100个div+text，display 每0.1s自动隐藏展开 200次 */
    let $container = genFragment();
    $app.appendChild($container);
    let isShow = true;

    setTimeout(() => {
      runTimer(() => {
        $container.style.display = isShow ? 'none' : 'flex';
        isShow = !isShow;
      }, 100)
    }, 10000);
  },
}
