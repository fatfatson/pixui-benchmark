const helper = require('@/lib/helper')

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    /* createElement div 16ms/1次 */

    for (let i = 0; i < 10000; i++) {

      document.createElement('div');
    }
  },
}
