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
      width: 400px;
      color: #fff;
      background-color: #000;
    }

    .box {
      width: 100px;
      height: 100px;
      background-color: blue;
      margin-bottom: 12px;
    }

    .translate {
      transform: translate(0,0);
      transition: transform 0.5s ease-out;
    }
    .translate1 {
      transform: translate(100px,0);
    }
    .translate2 {
      transform: translate(200%,0);
    }

    .rotate {
      transform: rotate(0deg);
      transition: transform 0.5s ease-out;
    }
    .rotate1 {
      transform: rotate(360deg);
    }

    .scale {
      transform: scale(1);
      transition: transform 0.5s ease-out;
    }
    .scale1 {
      transform: scale(2);
    }
    .scale2 {
      transform: scale(0.5);
    }

    .size {
      transition: width 0.5s ease-out,height 0.5s ease-out;
    }
    .size1 {
      width: 200px;
      height: 120px;
    }

    .bgcolor {
      backgorund-color: blue;
      transition: background-color 0.5s ease-out;
    }
    .bgcolor1 {
      background-color: transparent;
    }
    .bgcolor2 {
      background-color: green;;
    }

    .opacity {
      opacity: 1;
      transition: opacity 0.5s ease-out;
    }
    .opacity1 {
      opacity: 0;
    }

    .position {
      position: relative;
      left: 0;
      transition: left 0.5s ease-out;
    }
    .position1 {
      left: 100px;
    }

    .combination {
      transform-origin: 0px 0px;
      transform: translate(0,0) scale(1);
      background-color: blue;
      opacity: 1;
      transition: transform 0.5s ease-out, background-color 0.5s ease-out, opacity 0.5s ease-out;
    }
    .combination1 {
      transform: translate(200px, 0) scale(1.5);
      background-color: green;
      opacity: 0.5;
    }
  `,
  html: `
  <div class="wrapper">
    <div class="title">点击触发动画</div>
    <div class="title">transform: translate(0, 100px)</div>
    <div id="translate1" class="box translate"></div>
    <div class="title">transform: translate(0, 200%)</div>
    <div id="translate2" class="box translate"></div>
    <div class="title">transform: rotate(360deg)</div>
    <div id="rotate1" class="box rotate"></div>
    <div class="title">transform: scale(2);transform-origin: 0px 0px</div>
    <div id="scale1" class="box scale" style="transform-origin: 0px 0px;"></div>
    <div class="title">transform: scale(0.5);transform-origin: 50% 50%</div>
    <div id="scale2" class="box scale" style="transform-origin: 50% 50%;"></div>
    <div class="title">width/height</div>
    <div id="size1" class="box size"></div>
    <div class="title">background-color: transparent</div>
    <div id="bgcolor1" class="box bgcolor"></div>
    <div class="title">background-color: green</div>
    <div id="bgcolor2" class="box bgcolor"></div>
    <div class="title">opacity: 0</div>
    <div id="opacity1" class="box opacity"></div>
    <div class="title">left: 100px</div>
    <div id="position1" class="box position"></div>
    <div class="title">组合动画：translate + scale + background-color + opacity</div>
    <div id="combination1" class="box combination"></div>
  </div>
  `,
  run() {
    const dTranslate1 = document.querySelector('#translate1');
    const dTranslate2 = document.querySelector('#translate2');
    const dRotate1 = document.querySelector('#rotate1');
    const dScale1 = document.querySelector('#scale1');
    const dScale2 = document.querySelector('#scale2');
    const dSize1 = document.querySelector('#size1');
    const dBgcolor1 = document.querySelector('#bgcolor1');
    const dBgcolor2 = document.querySelector('#bgcolor2');
    const dOpacity1 = document.querySelector('#opacity1');
    const dPosition1 = document.querySelector('#position1');
    const dCombination1 = document.querySelector('#combination1');

    window.resizeTo(1280, 600);
    window.moveTo(0, 0);

    function toggleClass(node, classname) {
      const classlist = node.className.split(' ');
      const index = classlist.indexOf(classname);
      if (index >= 0) {
        classlist.splice(index, 1);
      } else {
        classlist.push(classname);
      }

      node.className = classlist.join(' ');
    }

    dTranslate1.addEventListener('click', () => {
      toggleClass(dTranslate1, 'translate1');
    });
    dTranslate2.addEventListener('click', () => {
      toggleClass(dTranslate2, 'translate2');
    });

    dRotate1.addEventListener('click', () => {
      toggleClass(dRotate1, 'rotate1');
    });

    dScale1.addEventListener('click', () => {
      toggleClass(dScale1, 'scale1');
    });
    dScale2.addEventListener('click', () => {
      toggleClass(dScale2, 'scale2');
    });

    dSize1.addEventListener('click', () => {
      toggleClass(dSize1, 'size1');
    });

    dBgcolor1.addEventListener('click', () => {
      toggleClass(dBgcolor1, 'bgcolor1');
    });
    dBgcolor2.addEventListener('click', () => {
      toggleClass(dBgcolor2, 'bgcolor2');
    });

    dOpacity1.addEventListener('click', () => {
      toggleClass(dOpacity1, 'opacity1');
    });

    dPosition1.addEventListener('click', () => {
      toggleClass(dPosition1, 'position1');
    });

    dCombination1.addEventListener('click', () => {
      toggleClass(dCombination1, 'combination1');
    });
  },
};
