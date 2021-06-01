const helper = require('@/lib/helper')

exports.benchmark = {
  style: `
    .container1 {
      width: 100%;
      hegiht: 100%;
      background-color: red;
    }
  `,
  html: `
    <div class="container1"></box>
  `,
  run() {
    window.moveTo(0, 0);
    window.resizeTo(screen.width, screen.height);
    document.querySelector('.container1').style.width = screen.width;
    document.querySelector('.container1').style.height = screen.height;
  },
}
