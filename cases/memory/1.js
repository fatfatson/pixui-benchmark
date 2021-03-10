window.moveTo(100, 100);
window.resizeTo(400, 400);

// 启动延时(ms) delay=2000
let delayResult = location.search.match(/delay=([^=&]+)/);
let delay = parseInt((delayResult && delayResult[1]) || 2000, 10);

// 用例类型 type=1
let typeResult = location.search.match(/type=([^=&]+)/);
let type = parseInt((typeResult && typeResult[1]) || 1, 10);

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
    for (let i = 0; i < 100; i++) {
      $app.appendChild(document.createElement('div'));
    }
  }

  /* 10000个 无样式div */
  if (type === 2) {
    for (let i = 0; i < 10000; i++) {
      $app.appendChild(document.createElement('div'));
    }
  }

  /* 100个 宽高100*100 透明 div */
  if (type === 3) {
    for (let i = 0; i < 100; i++) {
      let $div = document.createElement('div');
      $div.className = 'box_transparent';
      $app.appendChild($div);
    }
  }

  /* 10000个 宽高100*100 透明 div */
  if (type === 4) {
    for (let i = 0; i < 10000; i++) {
      let $div = document.createElement('div');
      $div.className = 'box_transparent';
      $app.appendChild($div);
    }
  }

  /* 100个 宽高100*100 背景色 div */
  if (type === 5) {
    for (let i = 0; i < 100; i++) {
      let $div = document.createElement('div');
      $div.className = 'box_color';
      $app.appendChild($div);
    }
  }

  /* 10000个 宽高100*100 背景色 div */
  if (type === 6) {
    for (let i = 0; i < 10000; i++) {
      let $div = document.createElement('div');
      $div.className = 'box_color';
      $app.appendChild($div);
    }
  }
}