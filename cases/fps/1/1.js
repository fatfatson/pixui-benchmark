window.moveTo(100, 100);
window.resizeTo(400, 400);

// 启动延时(ms) delay=2000
let delayResult = location.search.match(/delay=([^=&]+)/);
let delay = parseInt((delayResult && delayResult[1]) || 3000, 10);

// 用例类型 type=1
let typeResult = document.getElementById('app').getAttribute('type');
let type = 1 || parseInt(typeResult || 1, 10);

setTimeout(() => {
  let startTime = Date.now();
  console.log('begin, type: ', type)
  run();
  console.log('end:', Date.now() - startTime);
  document.getElementById('app').style.backgroundColor = 'green';
}, delay);

function run() {
  const $app = document.getElementById('app');

  /* 1. createElement div 1000次 */
  if (type === 1) {
    for (let i = 0; i < 10000; i++) {
      document.createElement('div');
    }
  }

  /* 2. appendChild div 1000次 */
  if (type === 2) {
    let $div = document.createElement('div');

    for (let i = 0; i < 10000; i++) {
      $app.appendChild($div);
    }
  }

  /* 3. insertBefore div 1000次 */
  if (type === 3) {
    let $div = document.createElement('div');

    for (let i = 0; i < 10000; i++) {
      $app.insertBefore($div);
    }
  }

  /* 4. insertBefore div 1000次 */
  if (type === 4) {
    let $div = document.createElement('div');
    $div.appendChild(document.createTextNode('1'));
    $app.appendChild($div);

    for (let i = 0; i < 10000; i++) {
      $div.childNodes[0].data = `${i}`;
    }
  }
}