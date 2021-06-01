const helper = require('@/lib/helper')

exports.benchmark = {
  style: ``,
  html: ``,
  run() {
    setInterval(() => {
      let startTime = Date.now();
      while (Date.now() - startTime < 8) {
        console.log('1');
      }
    }, 16);
  },
}
