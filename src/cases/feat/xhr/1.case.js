const helper = require('@/lib/helper');
const xhr = require('xhr');

exports.benchmark = {
  style: `
    .wrapper {
      display: flex;
      flex-direction: column;
      overflow: scroll;
      margin-left: 20px;
      height: 600px;
      width: 1260px;
    }

    .title {
      font-size: 16px;
      color: #fff;
      background-color: #000;
    }
  `,
  html: `
   <div class="wrapper">
    <div id="title1" class="title">点击发送：get(2kb)</div>
    <div id="text1">-</div>
    <div id="title2" class="title">点击发送：post(5mb)</div>
    <div id="text2">-</div>
    <div id="title3" class="title">点击发送：10s超时</div>
    <div id="text3">-</div>
    <div id="title4" class="title">点击发送：5s主动abort</div>
    <div id="text4">-</div>
    <div id="title5" class="title">点击发送：headers</div>
    <div id="text5">-</div>
  </div>
  `,
  run() {
    window.resizeTo(1280, 600);
    window.moveTo(0, 0);
    const HOST = location.host.split(':')[0];

    function randomString(length) {
      const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let result = '';
      for (let i = length; i > 0; --i) {
        result += str[Math.floor(Math.random() * str.length)];
      }
      return result;
    }

    document.querySelector('#title1').addEventListener('click', () => {
      const path = `/get?test=${randomString(1900)}`;
      const xhrReq = xhr(
        {
          json: true,
          method: 'GET',
          url: `http://${HOST}:8081${path}`,
        },
        (err, res) => {
          if (err) {
            document.querySelector('#text1').childNodes[0].data = `error: ${err.message}`;
            return;
          }

          if (res.body.path === path) {
            document.querySelector('#text1').childNodes[0].data = '通过';
          } else {
            document.querySelector('#text1').childNodes[0].data = `不通过，bodylength${
              JSON.stringify(res.body).length
            }`;
          }
        },
      );
    });

    document.querySelector('#title2').addEventListener('click', () => {
      const xhrReq = xhr(
        {
          json: true,
          method: 'POST',
          url: `http://${HOST}:8081/largebody`,
        },
        (err, res) => {
          if (err) {
            document.querySelector('#text2').childNodes[0].data = `error: ${err.message}`;
            return;
          }

          if (JSON.stringify(res.body).length > 5000000) {
            document.querySelector('#text2').childNodes[0].data = '通过';
          } else {
            document.querySelector('#text2').childNodes[0].data = `不通过，bodylength${
              JSON.stringify(res.body).length
            }`;
          }
        },
      );
    });

    document.querySelector('#title3').addEventListener('click', () => {
      const xhrReq = xhr(
        {
          json: true,
          method: 'POST',
          url: `http://${HOST}:8081/hangon`,
          timeout: 10000,
        },
        (err, res) => {
          if (err) {
            document.querySelector('#text3').childNodes[0].data = `error: ${err.message}`;
            return;
          }
        },
      );
    });

    document.querySelector('#title4').addEventListener('click', () => {
      const xhrReq = xhr(
        {
          json: true,
          method: 'POST',
          url: `http://${HOST}:8081/hangon`,
          timeout: 10000,
        },
        (err, res) => {
          if (err) {
            document.querySelector('#text4').childNodes[0].data = `error: ${err.message}`;
            return;
          }
        },
      );
      setTimeout(() => {
        xhrReq.abort();
        document.querySelector('#text4').childNodes[0].data = '5s abort';
      }, 5000);
    });

    document.querySelector('#title5').addEventListener('click', () => {
      const xhrReq = xhr(
        {
          json: true,
          method: 'POST',
          url: `http://${HOST}:8081/headers`,
          headers: {
            'x-host': 'testheaders',
          },
        },
        (err, res) => {
          if (err) {
            document.querySelector('#text5').childNodes[0].data = `error: ${err.message}`;
            return;
          }

          if (res.body['x-host'] === 'testheaders') {
            document.querySelector('#text5').childNodes[0].data = '通过';
          } else {
            document.querySelector('#text5').childNodes[0].data = `不通过，${JSON.stringify(
              res.body,
            )}`;
          }
        },
      );
    });
  },
};
