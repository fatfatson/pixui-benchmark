const express = require('express')
const fs = require('fs')
const pahtlib = require('path')
const { compileCaseToBundleHtml, pfbsCompile } = require('./build')


const app = express();
const publicDir = pahtlib.join(__dirname, '../cases')

// 免得报错
app.get('/favicon.ico', function (req, res) {
  res.send();
})

//拦截输出，当agent为PixUI时，转换为fbs二进制数据再返回
app.get('*', async (req, res, next) => {
  console.log(`request ${req.url}`)

  const reqPathname = req.path
  const ua = req.get('User-Agent');

  const ext = pahtlib.extname(reqPathname)
  const extToContentType = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css'
  }

  res.set('content-type', extToContentType[ext] || 'text/plain')


  const isPixUI = /PixUI/.test(ua);

  const relatedJs = pahtlib.join(__dirname, '../src/cases/', reqPathname).replace(/.html$/, '.case.js');


  if (!fs.existsSync(relatedJs) || fs.statSync(relatedJs).isDirectory()) {
    return res.send('not found')
  }

  const htmlContent = compileCaseToBundleHtml(relatedJs);
  if (isPixUI) {
    const fbsContent = await pfbsCompile(htmlContent);
    res.send(fbsContent)
  } else {
    res.send(htmlContent)
  }
});


const appPort = 8083
app.listen(appPort, () => {
  console.log(`app is listening at http://localhost:${appPort}/`)
})