const helper = require('@/lib/helper')

exports.benchmark = {
  style: `
    .container {
      width: 100%;
      hegiht: 100%;
      background-color: red;
    }
  `,
  html: `
    <div class="container"></box>
  `,
  run() {
    window.resizeTo(screen.width, screen.height);
    document.querySelector('container').width = screen.width;
    document.querySelector('container').height = screen.height;
  },
}
