const helper = require('@/lib/helper');

exports.benchmark = {
  style: `
    .wrapper {
      display: flex;
      flex-direction: column;
      overflow: scroll;
      margin-left: 20px;
      height: 600px;
      width: 1260px;
    }

    .title {
      font-size: 16px;
      color: #fff;
      background-color: #000;
    }
  `,
  html: `
  <div class="wrapper">
    <div class="title">页面关闭事件：adb logcat | grep pageclose</div>
    <div id="title1" class="title">捕获到错误事件：</div>
  </div>
  `,
  run() {
    window.resizeTo(1280, 600);
    window.moveTo(0, 0);

    window.addEventListener('close', () => {
      console.log('catched pageclose event');
    });

    window.addEventListener('error', (error) => {
      document.getElementById('title1').childNodes[0].data = `捕获到错误事件：${error.message}`;
    });

    setTimeout(() => {
      throw new Error('3s自定义错误');
    }, 3000);
    setTimeout(() => {
      throw new Error('6s自定义错误');
    }, 6000);
  },
};
