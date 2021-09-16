const helper = require('@/lib/helper');

exports.benchmark = {
  style: `
    .box {
      width: 400px;
      height: 400px;
      background-color: red;
      display: flex;
      flex-direction: column;
    }
  `,
  html: `
    <div class="box" draggable="true">
      <div class="text1">screen.width: 0 screen.height: 0</div>
      <div class="text2">[dragstart]clientX: 0  clientY: 0</div>
      <div class="text3">[drag]clientX: 0  clientY: 0</div>
      <div class="text4">[dragend]clientX: 0  clientY: 0</div>
    <div>
  `,
  run() {
    const MAX_WIDTH = screen.width || 1280;
    const MAX_HEIGHT = screen.height || 720;

    const dText1 = document.querySelector('.text1');
    const dText2 = document.querySelector('.text2');
    const dText3 = document.querySelector('.text3');
    const dText4 = document.querySelector('.text4');
    const dBox = document.querySelector('.box');

    dText1.childNodes[0].data = `screen.width: ${screen.width} screen.height: ${screen.height}`;

    console.log('screen.width/height', screen.width, screen.height);

    const INIT_POS = {
      weiguan: {
        x: 260,
        y: 130,
      },
      shipinhao: {
        x: (MAX_WIDTH - 400) / 2,
        y: (MAX_HEIGHT - 400) / 2,
      },
    };

    const panelSize = {
      width: 0,
      height: 0,
    };

    const pos = {
      x: 0,
      y: 0,
    };

    const diff = {
      x: 0,
      y: 0,
    };

    const resizeTo = (width, height) => {
      panelSize.width = width;
      panelSize.height = height;
      window.resizeTo(panelSize.width, panelSize.height);

      // 检查当前面板是否溢出
      moveTo(pos.x, pos.y);
    };

    const moveTo = (x, y) => {
      const safeX = Math.max(Math.min(x, MAX_WIDTH - panelSize.width), 0);
      const safeY = Math.max(Math.min(y, MAX_HEIGHT - panelSize.height), 0);

      pos.x = safeX;
      pos.y = safeY;

      window.moveTo(safeX, safeY);
    };

    const initPos = (scene = 'weiguan') => {
      pos.x = INIT_POS[scene].x;
      pos.y = INIT_POS[scene].y;
      moveTo(pos.x, pos.y);
    };

    const dragStartHandler = (e) => {
      diff.x = e.clientX;
      diff.y = e.clientY;

      dText2.childNodes[0].data = `[dragstart]clientX: ${e.clientX} clientY: ${e.clientY}`;

      console.log('dragStart', e.clientX, e.clientY);
    };

    const dragHandler = (e) => {
      const x = pos.x + e.clientX - diff.x;
      const y = pos.y + e.clientY - diff.y;

      dText3.childNodes[0].data = `[drag]clientX: ${e.clientX} clientY: ${e.clientY}`;

      console.log('drag', e.clientX, e.clientY);
      moveTo(x, y);
    };

    const dragEndHandler = (e) => {
      const x = pos.x + e.clientX - diff.x;
      const y = pos.y + e.clientY - diff.y;

      dText4.childNodes[0].data = `[dragend]clientX: ${e.clientX} clientY: ${e.clientY}`;

      console.log('dragEnd', e.clientX, e.clientY);
      moveTo(x, y);
    };

    let isFold = false;
    const clickHandler = () => {
      isFold = !isFold;

      if (isFold) {
        dBox.style.height = '200px';
        resizeTo(400, 200);
      } else {
        dBox.style.height = '400px';
        resizeTo(400, 400);
      }
    };

    initPos('shipinhao');

    dBox.addEventListener('dragstart', dragStartHandler);
    dBox.addEventListener('drag', dragHandler);
    dBox.addEventListener('dragend', dragEndHandler);
    dBox.addEventListener('click', clickHandler);
  },
};
