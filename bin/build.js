require('../module_alias');

const pathlib = require('path');
const glob = require('glob');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const fs = require('fs');
const { compileCaseToBundleHtml, pfbsCompile, projectRoot } = require('@/lib/compile');

const srcDir = pathlib.join(projectRoot, 'src');
const distDir = pathlib.join(projectRoot, 'dist');
rimraf.sync(distDir);

async function main() {
  // 所有用例
  const benchmarkCaseFiles = glob.sync(`${projectRoot}/src/cases/**/*.case.js`);

  for (const benchmarkCaseFile of benchmarkCaseFiles) {
    const html = compileCaseToBundleHtml(benchmarkCaseFile);

    const relativePath = pathlib.relative(srcDir, benchmarkCaseFile);
    const htmlTarget = pathlib.join(distDir, relativePath).replace(/\.case\.js$/, '.html');
    const htmlTargetDir = pathlib.dirname(htmlTarget);
    mkdirp.sync(htmlTargetDir);

    fs.writeFileSync(htmlTarget.replace(/\.html$/, '.web.html'), html);

    const pfbsHtml4 = await pfbsCompile(html, { version: '0.4' });
    fs.writeFileSync(htmlTarget, pfbsHtml4, 'binary');

    const pfbsHtml3 = await pfbsCompile(html, { version: '0.3' });
    fs.writeFileSync(htmlTarget.replace(/\.html$/, '.0_3.html'), pfbsHtml3, 'binary');
  }
}

main();
