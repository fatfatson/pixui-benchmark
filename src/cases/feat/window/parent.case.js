const helper = require('@/lib/helper');

exports.benchmark = {
  style: `
    .box {
      width: 200px;
      height: 200px;
      background-color: blue;
    }

    .float_box {
      width: 50px;
      height: 50px;
      background-color: red;
      position: absolute;
      left: 0px;
      top: 0px;
    }
  `,
  html: `
    <div class="box">
      <div class="float_box"></box>
      <input type="text" style="margin-top: 100px; width: 100px; height: 30px" placeholder="what" />
    </box>
  `,
  run() {
    window.resizeTo(200, 200);
    window.moveTo(100, 100);

    const childWindow = window.open('./child.html');
    childWindow.resizeTo(50, 50);
    childWindow.moveTo(100, 100);

    childWindow.postMessage(JSON.stringify({ width: 200, height: 200 }));

    window.addEventListener('close', () => {
      console.log('parent closed');
      childWindow.postMessage(JSON.stringify({ type: 'close' }));
    });

    let isFold = false;

    const $box = document.querySelector('.box');
    $box.addEventListener('click', () => {
      console.log('click parent');
      window.external.setWindowPass(true);
      window.external.setWindowPriority(2);

      // setTimeout(() => {
      //   childWindow.close();

      // }, 1000);
    });

    window.addEventListener('message', (e) => {
      const { data, source } = e;
      const dataObj = JSON.parse(data);

      if (dataObj.type === 'toggle') {
        if (isFold) {
          $box.style.width = '200px';
          $box.style.height = '200px';
        } else {
          $box.style.width = '100px';
          $box.style.height = '100px';
        }

        isFold = !isFold;
        return;
      }

      window.moveTo(dataObj.x, dataObj.y);
    });
  },
};
