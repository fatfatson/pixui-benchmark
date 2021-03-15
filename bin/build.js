require('../module_alias')

const pathlib = require('path')
const glob = require('glob')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const fs = require('fs')
const { compileCaseToBundleHtml, pfbsCompile, projectRoot } = require('@/lib/compile')


const srcDir = pathlib.join(projectRoot, 'src')
const distDir = pathlib.join(projectRoot, 'dist')
rimraf.sync(distDir)



async function main() {
  // 所有用例
  const benchmarkCaseFiles = glob.sync(`${projectRoot}/src/cases/**/*.case.js`)

  for (const benchmarkCaseFile of benchmarkCaseFiles) {
    const html = compileCaseToBundleHtml(benchmarkCaseFile)

    const relativePath = pathlib.relative(srcDir, benchmarkCaseFile)
    const htmlTarget = pathlib.join(distDir, relativePath).replace(/\.js$/, '.html');
    const htmlTargetDir = pathlib.dirname(htmlTarget);
    mkdirp.sync(htmlTargetDir)

    const fbsHtml = await pfbsCompile(html)

    fs.writeFileSync(htmlTarget, fbsHtml, 'binary')
  }
}

main()


