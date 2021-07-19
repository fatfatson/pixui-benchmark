exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');
    const $container = document.createElement('div');
    $app.appendChild($container);

    for (let i = 0; i < 1000; i++) {
      const $div = document.createElement('div');
      $app.appendChild($div);
    }
  },
};
