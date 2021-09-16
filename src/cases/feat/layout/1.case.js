const helper = require('@/lib/helper');

exports.benchmark = {
  style: `
    * {
      flex-shrink: 0;
    }

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
      width: 800px;
      color: #fff;
      background-color: #000;
    }

    .circle_wrapper {
      width: 100px;
      height: 100px;
      border: 4px solid red;
      border-radius: 52px;
    }

    .rect_box {
      width: 100px;
      height: 100px;
      background-color: blue;
    }
  `,
  html: `
  <div class="wrapper">
    <text id="title1" class="title" style="margin-bottom: 12px">
      <span>计算这行字的高度（正确：约22）：</span>
      <span id="height1">0</span>
    </text>
    <text id="title2" class="title" style="height: 50px; margin-bottom: 12px">
      <span>计算这行字的高度（正确：50）：</span>
      <span id="height2">0</span>
    </text>
    <div id="title3" class="title" style="height: 50px; margin-bottom: 12px">
      <span>计算这行字的高度（正确：50）：</span>
      <span id="height3">0</span>
    </div>
    <div class="title">圆形外框 + 父元素裁剪 + 矩形色块</div>
    <div class="circle_wrapper" style="overflow: hidden">
      <div class="rect_box"></div>
    </div>
    <div class="title">圆形外框 + 父元素不裁剪 + 矩形色块</div>
    <div class="circle_wrapper">
      <div class="rect_box"></div>
    </div>
    <div class="title">圆形色块</div>
    <div class="rect_box" style="border-radius: 50px"></div>
    <div class="title">矩形色块 +  边框</div>
    <div class="rect_box" style="border: 4px solid red;"></div>
  </div>
  `,
  run() {
    window.resizeTo(1280, 600);
    window.moveTo(0, 0);

    function getBoundingClientRectJSON(node) {
      const obj = node.getBoundingClientRect();
      return JSON.stringify({
        x: obj.x,
        y: obj.y,
        width: obj.width,
        height: obj.height,
        top: obj.top,
        right: obj.right,
        bottom: obj.bottom,
        left: obj.left,
      });
    }

    document.querySelector('#height1').childNodes[0].data = getBoundingClientRectJSON(
      document.querySelector('#title1'),
    );
    document.querySelector('#height2').childNodes[0].data = getBoundingClientRectJSON(
      document.querySelector('#title2'),
    );
    document.querySelector('#height3').childNodes[0].data = getBoundingClientRectJSON(
      document.querySelector('#title3'),
    );
  },
};
