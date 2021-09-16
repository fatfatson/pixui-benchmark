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

    .input {
      height: 30px;
      width: 200px;
      font-size: 14px;
      background-color: blue;
      color: #fff;
      box-shadow: none;
      border: 2px solid green;
    }

    .input-color::-moz-placeholder {
      color: yellow;
    }

    .btn {
      border: 2px solid #000;
      background-color: #ccc;
      width: 100px;
      height: 50px;
      text-align: center;
    }
  `,
  html: `
    <div class="wrapper">
      <div class="title">默认状态</div>
      <input type="text"/>
      <div class="title">样式</div>
      <input class="input" type="text" />
      <div class="title">样式 + placeholder</div>
      <input class="input" type="text" placeholder="请输入内容（默认色）" />
      <div class="title">样式 + placeholder + placeholder-color</div>
      <input class="input input-color" type="text" placeholder="请输入内容（黄色）" />
      <div class="title">文本颜色</div>
      <input class="input input-color" type="text" placeholder="请输入内容" value="我应该是红色字" style="color: red" />
      <div class="title">get/set/event:change/event:input</div>
      <input
        id="input"
        class="input input-color" 
        type="text" placeholder="请输入内容"
        style="color: red"
      />
      <div id="btn-get" class="btn">get value</div>
      <div id="btn-set" class="btn">set value</div>
      <text id="text1">当前内容：</text>
      <text id="text2">[change]</text>
      <text id="text3">[input]</text>
      <text id="text4">blur/focus</text>
    </div>
    `,
  run() {
    const dInput = document.querySelector('#input');
    const dBtnGet = document.querySelector('#btn-get');
    const dBtnSet = document.querySelector('#btn-set');
    const dText1 = document.querySelector('#text1');
    const dText2 = document.querySelector('#text2');
    const dText3 = document.querySelector('#text3');
    const dText4 = document.querySelector('#text4');

    dBtnGet.addEventListener('click', () => {
      dText1.childNodes[0].data = `当前内容：${dInput.value}`;
    });

    dBtnSet.addEventListener('click', () => {
      dInput.value = '这是设置的内容';
      // dInput.setAttribute('value', '这是设置的内容');
    });

    dInput.addEventListener('change', (e) => {
      dText2.childNodes[0].data = `[change]e.target.value: ${e.target.value} | node.value: ${dInput.value}`;
    });
    dInput.addEventListener('input', (e) => {
      dText3.childNodes[0].data = `[input]e.target.value: ${e.target.value} | node.value: ${dInput.value}`;
    });
    dInput.addEventListener('focus', (e) => {
      dText4.childNodes[0].data = '触发 focus';
    });
    dInput.addEventListener('blur', (e) => {
      dText4.childNodes[0].data = '触发 blur';
    });
  },
};
