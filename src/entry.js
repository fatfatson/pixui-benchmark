import {benchmark} from '{{{benchmark_case}}}'

const autoGc = (duration = 160) => {
  if (globalThis.std?.gc) {
    // 避免浏览器报错
    setTimeout(() => {
      std.gc();
      autoGc(duration);
    }, duration);
  }
};

// autoGc();

// window.moveTo(100, 100);
// window.resizeTo(400, 400);


setTimeout(() => {
  let startTime = Date.now();
  benchmark.run()
  console.log('end:', Date.now() - startTime);
  document.getElementById('app').style.backgroundColor = 'green';
}, 2000);