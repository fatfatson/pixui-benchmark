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

function genText(length = 0) {
  let text = '';

  for (let i = 0; i < length; i++) {
    text += i % 10;
  }

  return text;
}

function genFragment() {
  let $container = document.createElement('div');
  $container.className = 'wrap';
  for (let i = 0; i < 100; i++) {
    let $div = document.createElement('div');
    let $text = document.createElement('text');
    
    $text.appendChild(document.createTextNode(genText(40)));
    $div.appendChild($text);
    $container.appendChild($div);
  }

  return $container;
}

function runTimer(cb, time) {
  let timer = setTimeout(() => {
    cb();

    runTimer(cb, time);
  }, time);

  return () => clearTimeout(timer);
}

function run() {
  const $app = document.getElementById('app');

  /* 100个div+text，display 每0.1s自动隐藏展开 200次 */
  if (type === 1) {
    let $container = genFragment();
    $app.appendChild($container);
    let isShow = true;

    runTimer(() => {
      $container.style.display = isShow ? 'none' : 'flex';
      isShow = !isShow;
    }, 100)
  }

  /* 100个div+text，add/remove 每0.1s自动隐藏展开 */
  if (type === 2) {
    let $container = genFragment();
    $app.appendChild($container);
    let isShow = true;

    runTimer(() => {
      if (isShow) {
        $app.removeChild($container);
        $container = null;
      } else {
        $container = genFragment();
        $app.appendChild($container);
      }

      isShow = !isShow;
    }, 100)
  }

  /* 100个div+text，display 每7s自动隐藏展开 */
  if (type === 3) {
    let $container = genFragment();
    $app.appendChild($container);
    let isShow = true;

    runTimer(() => {
      $container.style.display = isShow ? 'none' : 'flex';
      isShow = !isShow;
    }, 7000)
  }

  /* 100个div+text，add/remove 每7s自动隐藏展开 */
  if (type === 4) {
    let $container = genFragment();
    $app.appendChild($container);
    let isShow = true;

    runTimer(() => {
      if (isShow) {
        $app.removeChild($container);
        $container = null;
      } else {
        $container = genFragment();
        $app.appendChild($container);
      }

      isShow = !isShow;
    }, 7000)
  }

}