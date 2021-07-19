const helper = require('@/lib/helper');

exports.benchmark = {
  style: `

  `,
  html: '',
  run() {
    /*
      1. 在可见节点中添加 100 个 display:none 节点
      2. 2s后，每16ms显示一个节点
    */
    const $app = document.getElementById('app');

    const doms = [];
    const $container = document.createElement('div');
    $container.style.flexDirection = 'column';
    $container.style.display = 'flex';
    $app.appendChild($container);

    setTimeout(() => {
      for (let i = 0; i < 100; i++) {
        const $div = document.createElement('div');
        $div.className = 'box_color';
        $div.style.display = 'none';
        $container.appendChild($div);
        doms.push($div);
      }

      setTimeout(() => {
        helper.runTimer((stop) => {
          if (!doms.length) {
            stop();
            $app.style.backgroundColor = '#000000';
            return;
          }

          doms.pop().style.display = 'flex';
        }, 16);
      }, 2000);
    }, 2000);

    setTimeout(() => {
      $container.style.display = 'flex';
    }, 10000);
  },
};
