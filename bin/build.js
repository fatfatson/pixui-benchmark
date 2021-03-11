const pathlib = require('path')
const glob = require('glob')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const fs = require('fs')
const esbuild = require('esbuild')


const projectRoot = pathlib.join(__dirname, '..')
const srcDir = pathlib.join(projectRoot, 'src')
const distDir = pathlib.join(projectRoot, 'dist')
rimraf.sync(distDir)

const entryJsTemplate = fs.readFileSync(pathlib.join(projectRoot, 'src/entry.js')).toString()
const layoutTemplate = fs.readFileSync(pathlib.join(projectRoot, 'src/layout.html')).toString()

// 所有用例
const benchmarkCaseFiles = glob.sync(`${projectRoot}/src/cases/**/*.case.js`)

benchmarkCaseFiles.forEach(benchmarkCaseFile => {
  const relativePath = pathlib.relative(projectRoot, benchmarkCaseFile)
  const target = pathlib.join(distDir, relativePath);
  const targetDir = pathlib.dirname(target)
  mkdirp.sync(targetDir)

  const { benchmark } = require(benchmarkCaseFile)

  // 生成js文件
  const entryWithBenchmarkContent = entryJsTemplate.replace(`{{{benchmark_case}}}`, './' + pathlib.relative(srcDir, benchmarkCaseFile))
  esbuild.buildSync({
    bundle: true,
    outfile: target,
    stdin: {
      contents: entryWithBenchmarkContent,
      resolveDir: srcDir,
    }
  })
  // END 生成js文件

  // 生成html文件
  const caseHtml = layoutTemplate
    .replace(`{{{benchmark_html}}}`, benchmark.html)
    .replace(`{{{benchmark_style}}}`, benchmark.style)
    .replace(`{{{benchmark_js}}}`, pathlib.basename(benchmarkCaseFile))

  const htmlfilename = target.replace(/\.js$/, '.html')
  fs.writeFileSync(htmlfilename, caseHtml)
  // END 生成html文件
})
