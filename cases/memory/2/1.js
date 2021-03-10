window.moveTo(100, 100);
window.resizeTo(400, 400);

// 启动延时(ms) delay=2000
let delayResult = location.search.match(/delay=([^=&]+)/);
let delay = parseInt((delayResult && delayResult[1]) || 2000, 10);

// 用例类型 type=1
let typeResult = document.getElementById('app').getAttribute('type');
let type = parseInt(typeResult || 1, 10);

setTimeout(() => {
  let startTime = Date.now();
  console.log('begin')
  run();
  console.log('end:', Date.now() - startTime);
  document.getElementById('app').style.backgroundColor = 'green';
}, delay);

function run() {
  const $app = document.getElementById('app');

  /* 100个 无样式div */
  if (type === 1) {
    let $div = document.createElement('div');
    $app.appendChild($div);
    let $parent = $div;
    for (let i = 0; i < 100; i++) {
        $div = document.createElement('div');
        $parent.appendChild($div);
        $parent = $div;
    }
  }

  /* 10000个 无样式div */
  if (type === 2) {
    let $div = document.createElement('div');
    $app.appendChild($div);
    let $parent = $div;
    for (let i = 0; i < 10000; i++) {
        $div = document.createElement('div');
        $parent.appendChild($div);
        $parent = $div;
    }
  }

  /* 100个 宽高100*100 透明 div */
  if (type === 3) {
    let $div = document.createElement('div');
    $div.className = 'box_transparent';
    $app.appendChild($div);
    let $parent = $div;
    for (let i = 0; i < 100; i++) {
        $div = document.createElement('div');
        $div.className = 'box_transparent';
        $parent.appendChild($div);
        $parent = $div;
    }
  }

  /* 10000个 宽高100*100 透明 div */
  if (type === 4) {
    let $div = document.createElement('div');
    $div.className = 'box_transparent';
    $app.appendChild($div);
    let $parent = $div;
    for (let i = 0; i < 10000; i++) {
        $div = document.createElement('div');
        $div.className = 'box_transparent';
        $parent.appendChild($div);
        $parent = $div;
    }
  }

  /* 100个 宽高100*100 背景色 div */
  if (type === 5) {
    let $div = document.createElement('div');
    $div.className = 'box_transparent';
    $app.appendChild($div);
    let $parent = $div;
    for (let i = 0; i < 100; i++) {
        $div = document.createElement('div');
        $div.className = 'box_color';
        $parent.appendChild($div);
        $parent = $div;
    }
  }

  /* 10000个 宽高100*100 背景色 div */
  if (type === 6) {
    let $div = document.createElement('div');
    $div.className = 'box_transparent';
    $app.appendChild($div);
    let $parent = $div;
    for (let i = 0; i < 10000; i++) {
        $div = document.createElement('div');
        $div.className = 'box_color';
        $parent.appendChild($div);
        $parent = $div;
    }
  }
}