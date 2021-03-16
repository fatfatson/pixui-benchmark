const { runTimer, genFragment } = require('@/lib/helper')


exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');


    /* 100个div+text，add/remove 每0.1s自动隐藏展开 */
    let $container = genFragment();
    $app.appendChild($container);
    let isShow = true;

    setTimeout(() => {
      runTimer(() => {
        if (isShow) {
          $app.removeChild($container);
          $container = null;
        } else {
          $container = genFragment();
          $app.appendChild($container);
        }

        isShow = !isShow;
      }, 100)
    }, 10000);
  },
}
