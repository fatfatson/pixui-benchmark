exports.benchmark = {
  style: `

  `,
  html: `
  `,
  run() {
    const $app = document.getElementById('app');
    const $container = document.createElement('div');

    for (let i = 0; i < 1000; i++) {
      const $div = document.createElement('div');
    }
  },
};
