require('../module_alias');

const express = require('express');
const fs = require('fs');
const pahtlib = require('path');
const { compileCaseToBundleHtml, pfbsCompile } = require('@/lib/compile');
const os = require('os');


const app = express();

// 免得报错
app.get('/favicon.ico', (req, res) => {
  res.send();
});

// 拦截输出，当agent为PixUI时，转换为fbs二进制数据再返回
app.get('*', async (req, res, next) => {
  console.log(`request ${req.url}`);

  const reqPathname = req.path;
  const ua = req.get('User-Agent');

  const ext = pahtlib.extname(reqPathname);
  const extToContentType = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
  };

  res.set('content-type', extToContentType[ext] || 'text/plain');


  const isPixUI = /PixUI/.test(ua);
  const pixuiVersion = /(\d)\.(\d)\.(\d+)/.exec(ua);

  const relatedJs = pahtlib.join(__dirname, '../src/cases/', reqPathname).replace(/.html$/, '.case.js');


  if (!fs.existsSync(relatedJs) || fs.statSync(relatedJs).isDirectory()) {
    return res.send('not found');
  }

  const htmlContent = compileCaseToBundleHtml(relatedJs);
  if (isPixUI) {
    let pfbsVersion = '';
    if (pixuiVersion) {
      const minorVersion = parseInt(pixuiVersion[2]);
      pfbsVersion = `0.${minorVersion}`;
    }
    const fbsContent = await pfbsCompile(htmlContent, { version: pfbsVersion });
    res.send(fbsContent);
  } else {
    res.send(htmlContent);
  }
});


function getAllAddress() {
  const ifaces = os.networkInterfaces();

  const addrs = [];
  if (ifaces) {
    Object.keys(ifaces).forEach((dev) => {
      ifaces[dev].forEach((details) => {
        if (details.family === 'IPv4') {
          addrs.push(details.address);
          // console.info(('  ' + protocol + details.address + ':' + colors.green(port.toString())));
        }
      });
    });
  }

  return addrs;
}

const appPort = 8083;
app.listen(appPort, () => {
  console.log('app is listening at:');
  getAllAddress().forEach((address) => {
    console.log(`http://${address}:${appPort}/`);
  });
});
