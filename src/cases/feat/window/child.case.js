const helper = require('@/lib/helper')

exports.benchmark = {
  style: `
    .transparent_box {
      width: 50px;
      height: 50px;
      background-color: green;
    }
  `,
  html: `
    <div class="transparent_box" draggble="true"></box>
  `,
  run() {

    setInterval(() => {
      if (!window.opener) {
        window.close();
      }
    }, 1000);

    const MAX_WIDTH = screen.width || 1280;
    const MAX_HEIGHT = screen.height || 720;

    const pos = {
      x: 0,
      y: 0,
    };

    const diff = {
      x: 0,
      y: 0,
    };

    let panelSize = {
      width: 0,
      height: 0,
    };

    /**
     * @description 移动页面窗口。
     **/
    const moveTo = (x, y) => {
      const safeX = Math.max(Math.min(x, MAX_WIDTH - panelSize.width), 0);
      const safeY = Math.max(Math.min(y, MAX_HEIGHT - panelSize.height), 0);

      pos.x = safeX;
      pos.y = safeY;

      window.moveTo(safeX, safeY);

      window.opener.postMessage(JSON.stringify({ x: safeX, y: safeY }))
    };

    const dragStartHandler = (e) => {
      diff.x = e.clientX;
      diff.y = e.clientY;
    };

    const dragHandler = (e) => {
      const x = pos.x + e.clientX - diff.x;
      const y = pos.y + e.clientY - diff.y;
      moveTo(x, y);
    };

    const dragEndHandler = (e) => {
      const x = pos.x + e.clientX - diff.x;
      const y = pos.y + e.clientY - diff.y;
      moveTo(x, y);
    };

    window.resizeTo(50, 50);
    moveTo(100, 100);

    const $box = document.querySelector('.transparent_box');
    $box.draggable = 'true';
    $box.addEventListener('dragstart', dragStartHandler);
    $box.addEventListener('drag', dragHandler);
    $box.addEventListener('dragend', dragEndHandler);
    $box.addEventListener('click', () => {
      console.log('click child')
      window.external.setWindowPriority(2);
      window.opener.postMessage(JSON.stringify({ type: 'toggle' }));
    })

    window.addEventListener('message', (e) => {
      const { data, source } = e;
      let dataObj = JSON.parse(data);

      if (dataObj.type === 'close') {
        console.log('receive parent closed, ready to close child')
        // window.close();
        // return;
      }

      panelSize = { width: dataObj.width, height: dataObj.height };
    });
  },
}
