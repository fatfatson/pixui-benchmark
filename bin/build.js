const pathlib = require('path')
const glob = require('glob')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const fs = require('fs')
const esbuild = require('esbuild')
const os = require('os')


const projectRoot = pathlib.join(__dirname, '..')
const srcDir = pathlib.join(projectRoot, 'src')
const distDir = pathlib.join(projectRoot, 'dist')
rimraf.sync(distDir)

const entryJsTemplate = fs.readFileSync(pathlib.join(projectRoot, 'src/entry.js')).toString()
const layoutTemplate = fs.readFileSync(pathlib.join(projectRoot, 'src/layout.html')).toString()

// 所有用例
const benchmarkCaseFiles = glob.sync(`${projectRoot}/src/cases/**/*.case.js`)

benchmarkCaseFiles.forEach(benchmarkCaseFile => {
  const html = compileCaseToBundleHtml(benchmarkCaseFile)

  const relativePath = pathlib.relative(srcDir, benchmarkCaseFile)
  const htmlTarget = pathlib.join(distDir, relativePath).replace(/\.js$/, '.html');
  const htmlTargetDir = pathlib.dirname(htmlTarget);
  mkdirp.sync(htmlTargetDir)

  fs.writeFileSync(htmlTarget, html)
})

// 根据入口文件，生成单一html入口
function compileCaseToBundleHtml(benchmarkCaseFile) {
  const tempJsTarget = pathlib.join(os.tmpdir(), pathlib.basename(benchmarkCaseFile));

  const { benchmark } = require(benchmarkCaseFile)

  // 生成js文件
  const entryWithBenchmarkContent = entryJsTemplate.replace(`{{{benchmark_case}}}`, './' + pathlib.relative(srcDir, benchmarkCaseFile))
  esbuild.buildSync({
    bundle: true,
    outfile: tempJsTarget,
    stdin: {
      contents: entryWithBenchmarkContent,
      resolveDir: srcDir,
    }
  })
  const jsBundle = fs.readFileSync(tempJsTarget).toString();
  fs.unlinkSync(tempJsTarget);
  // END 生成js文件

  // 生成html文件
  const bundleHtml = layoutTemplate
    .replace(`{{{benchmark_html}}}`, benchmark.html)
    .replace(`{{{benchmark_style}}}`, benchmark.style)
    .replace(`{{{benchmark_js}}}`, jsBundle)

  // END 生成html文件

  return bundleHtml
}