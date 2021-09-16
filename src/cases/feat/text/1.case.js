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
      margin-top: 12px;
      font-size: 16px;
      color: #fff;
      background-color: #000;
    }

    .text {
      text-align: left;
      font-size: 20px;
      max-width: 100px;
      color: #3a6afc;
      overflow: hidden;
      background-color: #000;
    }
  `,
  html: `
  <div class="wrapper">
    <div class="title">line-clamp</div>
    <text class="text" style="line-clamp: 1; color: red;">Hello Pika, I'm bug!</text>
    <text class="text" style="line-clamp: 1; color: red;">Hello!</text>
    <text class="text" style="line-clamp: 1; color: red;">子聪</text>
    <text class="text" style="line-clamp: 1; width: 100px;">子聪</text>
    <text class="text" style="width: 100px; line-clamp: 1">Hello Pika, I'm OK!</text>
    <text class="text" style="line-clamp: 2">Hello!</text>
    <text class="text" style="line-clamp: 2">Hello Pika, I'm OK!</text>
    <text class="text" style="line-clamp: 2">Hello Pika, I'm OK!Hello Pika, I'm OK!</text>
    <div class="title"><span> color/img/margin/background-color/border-raduis</div>
    <text style="color: red;">
      <span>我是红色，右边应该有张图片</span>
      <img src="https://iph.href.lu/20x20" style="width: 20px; height: 20px;" />
      <span style="color: blue; background-color: #666; border-radius: 10px;">我是蓝色，背景色圆角黑色</span>
      <span style="color: green; margin-left: 12px">我是绿色，和左边有间隙</span>
      <span id="span1">点我增加</span>
      <span id="span2">0</span>
    </text>
  </div>
  `,
  run() {
    window.resizeTo(1280, 600);
    window.moveTo(0, 0);

    let count = 0;
    document.querySelector('#span1').addEventListener('click', () => {
      count += 1;
      document.querySelector('#span2').childNodes[0].data = count;
    });
  },
};
