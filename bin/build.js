const glob = require("glob")
const mkdirp = require('mkdirp')
const pathlib = require('path')
const child_process = require('child_process')
const rimraf = require('rimraf')


const projectRoot = pathlib.join(__dirname, '..')
const distDir = pathlib.join(projectRoot, 'dist')
rimraf.sync(distDir);

glob(pathlib.join(projectRoot, "cases/**/*.{js,html}"), {}, function (er, files) {
  files.forEach(filename => {
    const ext = pathlib.extname(filename);
    const isJs = ext === '.js'
    const jsArgs = isJs ? '--js' : '';

    const relativePath = pathlib.relative(projectRoot, filename)
    const target = pathlib.join(distDir, relativePath)
    const targetDir  = pathlib.dirname(target)
    mkdirp.sync(targetDir)

    const pfbsPlatformName = {
      'darwin': 'pfbs',
      'linux': 'pfbs-linux',
    }[process.platform];
    const pfbsPath = pathlib.join(projectRoot, 'bin', pfbsPlatformName)

    child_process.execSync(`${pfbsPath} ${jsArgs} --src ${filename} --out ${target}`);
  })
})