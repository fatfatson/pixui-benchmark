import {benchmark} from '{{{benchmark_case}}}'

window.moveTo(100, 100);
window.resizeTo(400, 400);


let startTime = Date.now();
benchmark.run()
console.log('end:', Date.now() - startTime);
document.getElementById('app').style.backgroundColor = 'green';