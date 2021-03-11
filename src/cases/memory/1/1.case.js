const helper = require('@/lib/helper')

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');

    /* 100个 无样式div */
    for (let i = 0; i < 100; i++) {
      $app.appendChild(document.createElement('div'));
    }
  },
}
