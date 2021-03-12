exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');
    const $container = document.createElement('div');
    $container.style.display = 'none';
    $app.appendChild($container);

    for (let i = 0; i < 1000; i++) {
      let $div = document.createElement('div');
      $div.className = 'box_color';
      $container.appendChild($div);
    }
  },
}
