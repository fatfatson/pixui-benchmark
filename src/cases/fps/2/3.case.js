const helper = require('@/lib/helper')

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');
    for (let i = 0; i < 5000; i++) {
      $app.appendChild(document.createElement('div'));
    }
  },
}
