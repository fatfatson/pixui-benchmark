

function genText(length = 0) {
  let text = '';

  for (let i = 0; i < length; i++) {
    text += i % 10;
  }

  return text;
}
exports.genText = genText;