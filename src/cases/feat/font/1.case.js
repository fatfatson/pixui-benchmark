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
    <div>默认文字</div>
    <div style="font-size: 16px;">16px 文字，正常</div>
    <div style="font-size: 16px; font-weight: bold;">16px 文字，粗</div>
    <div style="font-size: 72px; color: red;">72px 文字，正常</div>
    <div style="font-size: 72px; color: red; font-weight: bold;">72px 文字，粗</div>
    <text style="font-size: 16px;">16px 文字，正常</text>
    <text style="font-size: 16px; font-weight: bold;">16px 文字，粗</text>
    <text style="font-size: 72px; color: red;">72px 文字，正常</text>
    <text style="font-size: 72px; color: red; font-weight: bold;">72px 文字，粗</text>
  </div>
  `,
  run() {
    window.resizeTo(1280, 600);
    window.moveTo(0, 0);
  },
};
