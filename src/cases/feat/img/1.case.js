const helper = require('@/lib/helper');

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
      width: 400px;
      color: #fff;
      background-color: #000;
    }

    .bgimg {
      width: 200px;
      height: 200px;
    }
  `,
  html: `
  <div class="wrapper">
    <div class="title">img + query</div>
    <img class="bgimg" src="https://iph.href.lu/200x200?text=%E7%9C%8B%E5%BE%97%E8%A7%81%E6%96%87%E5%AD%97%E5%B0%B1%E9%80%9A%E8%BF%87" />
    <div class="title">img + query + opacity</div>
    <img class="bgimg" src="https://iph.href.lu/200x200?text=%E7%9C%8B%E5%BE%97%E8%A7%81%E6%96%87%E5%AD%97%E5%B0%B1%E9%80%9A%E8%BF%87" style="opacity: 0.6" />
    <div class="title">img + query + 异步设置</div>
    <img id="bgimg1" class="bgimg" style="opacity: 0.6" />
    <div class="title">background-image + query</div>
    <div class="bgimg" style="background-image: url(https://iph.href.lu/200x200?text=%E7%9C%8B%E5%BE%97%E8%A7%81%E6%96%87%E5%AD%97%E5%B0%B1%E9%80%9A%E8%BF%87)"></div>
    <div class="title">background-image + query + opacity</div>
    <div class="bgimg" style="background-image: url(https://iph.href.lu/200x200?text=%E7%9C%8B%E5%BE%97%E8%A7%81%E6%96%87%E5%AD%97%E5%B0%B1%E9%80%9A%E8%BF%87);opacity: 0.6"></div>
    <div class="title">background-image + query + 同步设置</div>
    <div id="bgimg2" class="bgimg"></div>
    <div class="title">background-image + query + 异步设置</div>
    <div id="bgimg3" class="bgimg"></div>
  </div>
  `,
  run() {
    window.resizeTo(1280, 600);
    window.moveTo(0, 0);

    document.querySelector('#bgimg2').style['background-image'] =      'url(https://iph.href.lu/200x200?text=%E7%9C%8B%E5%BE%97%E8%A7%81%E6%96%87%E5%AD%97%E5%B0%B1%E9%80%9A%E8%BF%87)';
    document.querySelector('#bgimg2').style.backgroundImage =      'url(https://iph.href.lu/200x200?text=%E7%9C%8B%E5%BE%97%E8%A7%81%E6%96%87%E5%AD%97%E5%B0%B1%E9%80%9A%E8%BF%87)';
    setTimeout(() => {
      document
        .querySelector('#bgimg1')
        .setAttribute(
          'src',
          'https://iph.href.lu/200x200?text=%E7%9C%8B%E5%BE%97%E8%A7%81%E6%96%87%E5%AD%97%E5%B0%B1%E9%80%9A%E8%BF%87',
        );
      document.querySelector('#bgimg1').src =        'https://iph.href.lu/200x200?text=%E7%9C%8B%E5%BE%97%E8%A7%81%E6%96%87%E5%AD%97%E5%B0%B1%E9%80%9A%E8%BF%87';
      document.querySelector('#bgimg3').style['background-image'] =        'url(https://iph.href.lu/200x200?text=%E7%9C%8B%E5%BE%97%E8%A7%81%E6%96%87%E5%AD%97%E5%B0%B1%E9%80%9A%E8%BF%87)';
      document.querySelector('#bgimg3').style.backgroundImage =        'url(https://iph.href.lu/200x200?text=%E7%9C%8B%E5%BE%97%E8%A7%81%E6%96%87%E5%AD%97%E5%B0%B1%E9%80%9A%E8%BF%87)';
    }, 1000);
  },
};
