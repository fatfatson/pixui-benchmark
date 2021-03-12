

function genText(length = 0) {
  let text = '';

  for (let i = 0; i < length; i++) {
    text += i % 10;
  }

  return text;
}
exports.genText = genText;


let startTime = 0;
function runTimer(cb, time, needAutoStop = true) {
  if (startTime && Date.now() - startTime >= 60000 * 3 && needAutoStop) {
    return;
  } else if (!startTime) {
    startTime = Date.now()
  }

  let timer = setTimeout(() => {
    cb(() => clearTimeout(timer));

    runTimer(cb, time);
  }, time);

  return () => clearTimeout(timer);
}
exports.runTimer = runTimer;