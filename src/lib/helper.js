

function genText(length = 0) {
  let text = '';

  for (let i = 0; i < length; i++) {
    text += i % 10;
  }

  return text;
}
exports.genText = genText;

function getRandomChinese(){ 
  //生成随机汉字
  return String.fromCodePoint(Math.round(Math.random() * 20901) + 19968)
}

function genChinese(length = 0) {
  let text = '';

  for (let i = 0; i < length; i++) {
    text += getRandomChinese();
  }

  return text;
}
exports.genChinese = genChinese


let startTime = 0;
function runTimer(cb, time, isInfinity = true) {
  if (!isInfinity && startTime && (Date.now() - startTime >= 60000 * 4)) {
    return;
  } else if (!startTime) {
    startTime = Date.now()
  }

  let timer = setTimeout(() => {
    cb(() => clearTimeout(timer));

    runTimer(cb, time, isInfinity);
  }, time);

  return () => clearTimeout(timer);
}
exports.runTimer = runTimer;