const helper = require('@/lib/helper')

exports.benchmark = {
  style: `
    .audio {
      width: 100px;
      height: 100px;
    }
  `,
  // html: ``,
  // html: `
  //   <audio class="audio" src="http://10.43.42.84:8000/8169.ogg" autoplay="true" />
  // `,
  // html: `
  //   <audio class="audio" src="http://10.43.42.84:8000/8169.ogg" autoplay="true" loop="true" />
  // `,
  // html: `
  //   <audio class="audio" src="http://10.43.42.84:8000/houlai.ogg" autoplay="true" />
  // html: `
  //   <audio class="audio" src="http://10.43.42.84:8000/houlai.ogg" autoplay="true" loop="true" />
  // `,
  html: `
  `,
  run() {
    // let count = 0;
    // const $audio = document.querySelector('.audio');

    // $audio.play();
    // $audio.addEventListener('ended', () => {
    //   console.log('addEventListener audio ended')
    //   count++;

    //   // if (count === 1) {
    //   //   $audio.stop();
    //   //   $audio.setAttribute('src', 'http://10.43.42.84:8000/mayday.ogg')
    //   //   $audio.src = 'http://10.43.42.84:8000/mayday.ogg'
    //   //   $audio.play();
    //   // } else if (count === 2) {
    //   //   $audio.stop();
    //   //   $audio.setAttribute('src', 'http://10.43.42.84:8000/houlai.ogg')
    //   //   $audio.src = 'http://10.43.42.84:8000/houlai.ogg'
    //   //   $audio.play();
    //   // }
    // })
    // $audio.onended = () => {
    //   console.log('audio onended')
    // }
    // console.log('$audio.currentTime', $audio.currentTime);
    // console.log('$audio.canPlayType', JSON.stringify($audio.canPlayType()));

    // setTimeout(() => {
    //   $audio.pause();
    // }, 3000);

    // setTimeout(() => {
    //   $audio.play();
    // }, 6000);

    // setTimeout(() => {
    //   console.log('$audio.currentTime', $audio.currentTime);
    //   $audio.currentTime = 1;
    //   console.log('$audio.currentTime', $audio.currentTime);
    //   // $audio.seek(1000);
    //   $audio.play();
    // }, 5000);
    // setTimeout(() => {
    //   $audio.resume();
    // }, 4000);
  },
}
