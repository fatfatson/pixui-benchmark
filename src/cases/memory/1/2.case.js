const helper = require('@/lib/helper');

exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');

    /* 1000个 无样式div */
    for (let i = 0; i < 1000; i++) {
      $app.appendChild(document.createElement('div'));
    }
  },
};
