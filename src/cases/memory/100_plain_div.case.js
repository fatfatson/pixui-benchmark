const helper = require('@/lib/helper')

exports.benchmark = {
  name: ``,
  description: ``,
  style: `
  .a {
    background-color: red;
  }
  `,
  html: `
  <div class="a">html1</div>
  `,
  run() {
    document.querySelector('.a').innerText = 'html 2'
  },
}
