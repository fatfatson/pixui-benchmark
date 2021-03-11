const helper = require('@/lib/helper')

exports.benchmark = {
  style: `

  `,
  html: ``,
  run() {
    /*
      1. 在 display:none 节点中添加大量可视节点
      2. 2s后将父节点设为可见
    */
    const $app = document.getElementById('app');

    const $container = document.createElement('div');
    $container.style.flexDirection = 'column';
    $container.style.display = 'none';
    $app.appendChild($container);

    setTimeout(() => {
      for (let i = 0; i < 100; i++) {
        let $div = document.createElement('div');
        $div.className = 'box_color';
        $container.appendChild($div)
      }
    }, 2000);


    setTimeout(() => {
      $container.style.display = 'flex';
    }, 10000);
  },
}
