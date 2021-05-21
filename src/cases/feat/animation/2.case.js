const helper = require('@/lib/helper')

exports.benchmark = {
  style: `
    .wrapper {
      width: 300px;
      height: 100px;
      position: relative;
      overflow: hidden;
    }
    .panel {
      position: absolute;
      left: 0px;
      width: 300px; 
      height: 100px;
      background-color: #000;
      transition: left 0.2s linear;
    }
    .panel_2 {
      left: 300px;
      background-color: blue;
    }
    .panel.show {
      left: 0px;
    }
  `,
  html: `
  <div class="wrapper">
    <div class="panel"></div>
    <div class="panel panel_2"></div>
    <div class="btn_wrapper">
    </div>
  </div>
  `,
  run() {
    const $wrapper = document.querySelector('.wrapper');
    const $panel2 = document.querySelector('.panel_2');
    const $btnWrapper = document.querySelector('.btn_wrapper');
    let $btn = document.createElement('div');
    $btnWrapper.appendChild($btn);

    let isShowPanel = false;
    let isShowBtn = false;

    $wrapper.addEventListener('click', () => {
      isShowPanel = !isShowPanel;
      isShowBtn = !isShowBtn;

      if (isShowPanel) {
        $panel2.className = 'panel panel_2 show'
      } else {
        $panel2.className = 'panel panel_2'
      }
        
      setTimeout(() => {
        if (isShowBtn) {
          $btnWrapper.appendChild($btn);
        } else {
          $btnWrapper.removeChild($btn);
        }
      }, 100);
    })
  },
}
