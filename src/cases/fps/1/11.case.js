const helper = require('@/lib/helper')

exports.benchmark = {
  style: `

  `,
  html: ``,
  run() {
    /*
      每 16ms 卡顿 5ms
    */
  //  setInterval(() => {
    
  //  }, 16);
    helper.runTimer(() => {
      let startTime = Date.now()
    while (Date.now() - startTime <= 32) {
      console.log('1')
    }
    }, 32)
  },
}
