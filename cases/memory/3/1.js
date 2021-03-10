window.moveTo(100, 100);
window.resizeTo(400, 400);

// 启动延时(ms) delay=2000
let delayResult = location.search.match(/delay=([^=&]+)/);
let delay = parseInt((delayResult && delayResult[1]) || 0, 10);

// 用例类型 type=1
let typeResult = document.getElementById('app').getAttribute('type');
let type = parseInt(typeResult || 1, 10);

setTimeout(() => {
  let startTime = Date.now();
  console.log('begin, type: ', type)
  run();
  console.log('end:', Date.now() - startTime);
  document.getElementById('app').style.backgroundColor = 'green';
}, delay);

function genText(length = 0) {
  let text = '';

  for (let i = 0; i < length; i++) {
    text += i % 10;
  }

  return text;
}

function run() {
  const $app = document.getElementById('app');

  /* div 带文字 * 1000字（不换行） */
  if (type === 1) {
    let $div = document.createElement('div');
    $div.className = 'nowrap';
    let $textnode = document.createTextNode(genText(1000));
    $div.appendChild($textnode);

    $app.appendChild($div);
  }

  /* text 带文字 * 1000字（不换行）） */
  if (type === 2) {
    let $div = document.createElement('text');
    $div.className = 'nowrap';
    let $textnode = document.createTextNode(genText(1000));
    $div.appendChild($textnode);

    $app.appendChild($div);
  }

  /* text 带文字 * 1000字（换行）） */
  if (type === 3) {
    let $div = document.createElement('text');
    $div.className = 'wrap';
    let $textnode = document.createTextNode(genText(1000));
    $div.appendChild($textnode);

    $app.appendChild($div);
  }

  /* div 带文字 * 10000字（不换行） */
  if (type === 4) {
    let $div = document.createElement('div');
    $div.className = 'nowrap';
    let $textnode = document.createTextNode(genText(10000));
    $div.appendChild($textnode);

    $app.appendChild($div);
  }

  /* text 带文字 * 10000字（不换行）） */
  if (type === 5) {
    let $div = document.createElement('text');
    $div.className = 'nowrap';
    let $textnode = document.createTextNode(genText(10000));
    $div.appendChild($textnode);

    $app.appendChild($div);
  }

  /* text 带文字 * 10000字（换行）） */
  if (type === 6) {
    let $div = document.createElement('text');
    $div.className = 'wrap';
    let $textnode = document.createTextNode(genText(10000));
    $div.appendChild($textnode);

    $app.appendChild($div);
  }
}