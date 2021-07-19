const helper = require('@/lib/helper');

exports.benchmark = {
  style: `
    .breath_circle {
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background-color: #000;
      margin-right: 8px;
      animation: breathI 0.7s infinite alternate;
    }
    
    @keyframes breathI {
      0% {
        opacity: 0;
      }
    
      100% {
        opacity: 1;
      }
    }
  `,
  html: `
    <div class="breath_circle"></div>
    <div class="breath_circle"></div>
    <div class="breath_circle"></div>
    <div class="breath_circle"></div>
    <div class="breath_circle"></div>
    <div class="breath_circle"></div>
    <div class="breath_circle"></div>
    <div class="breath_circle"></div>
    <div class="breath_circle"></div>
    <div class="breath_circle"></div>
  `,
  run() {
    /* 呼吸动画 */
    const $app = document.getElementById('app');
    for (let i = 0; i < 1000; i++) {
      $app.appendChild(document.createElement('div'));
    }
  },
};
