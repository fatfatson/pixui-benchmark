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
      const $div = document.createElement('div');
      $div.className = 'box_color';
      $container.appendChild($div);
    }

    setTimeout(() => {
      $container.style.display = 'flex';
    }, 5000);
  },
};
