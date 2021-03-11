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

exports.genFragment = genFragment;

let startTime = 0;
function runTimer(cb, time) {
  if (startTime && Date.now() - startTime >= 60000 * 3 ) {
    return;
  } else if (!startTime) {
    startTime = Date.now()
  }

  let timer = setTimeout(() => {
    cb();

    runTimer(cb, time);
  }, time);

  return () => clearTimeout(timer);
}
exports.runTimer = runTimer;