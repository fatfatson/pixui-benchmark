const helper = require('@/lib/helper');

exports.benchmark = {
  style: `
    .input {
      height: 30px;
      width: 200px;
      font-size: 14px;
      margin-top: 30px;
      background-color: blue;
      color: #fff;
    }

      .input::-moz-placeholder {
        color: #fff;
      }
    }
  `,
  html: `
    <input class="input" type="text"/>
    <input class="input" type="text" placeholder="哈哈哈" />
  `,
  run() {
    const $input = document.querySelector('.input');
    $input.placeholder = 'what';

    $input.value = 'what 你在干嘛';

    setTimeout(() => {
      $input.value = `${$input.value}1`;
    }, 3000);
  },
};
