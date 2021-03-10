const express = require('express')
const fs = require('fs')
const pathLib = require('path')
const child_process = require('child_process');


const app = express();
const publicDir = pathLib.join(__dirname, '../cases')

//拦截输出，当agent为PixUI时，转换为fbs二进制数据再返回
app.use((req, res, next) => {
  let reqPathname = req.path

  if (reqPathname === '/favicon.ico') {
    res.send();
    return;
  }

  console.log(`request ${reqPathname}`)
  const ua = req.get('User-Agent');

  const ext = pathLib.extname(reqPathname)
  const extToContentType = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css'
  }

  res.set('content-type', extToContentType[ext])

  const isPixUI = /PixUI/.test(ua);
  const isJs = ext === '.js'
  const fileContent = fs.readFileSync(pathLib.join(publicDir, reqPathname));

  if (isPixUI) {
		const opts = isJs ? ['--js'] : [];
    const child = child_process.spawn(pathLib.join(__dirname, './pfbs'), ['--src', 'stdin', ...opts]);
    const lbuffers = [];

    child.stdout.on('data', (data) => {
      lbuffers.push(data);
    });
    child.stdout.on('close', () => {
      const lbuffer = Buffer.concat(lbuffers);
      res.send(lbuffer)
    });
    child.stdin.write(fileContent);
    child.stdin.end();
  } else {
    res.send(fileContent)
  }
});


const appPort = 8083
app.listen(appPort, () => {
  console.log(`app is listening at http://localhost:${appPort}/`)
})