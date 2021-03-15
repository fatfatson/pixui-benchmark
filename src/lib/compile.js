const esbuild = require('esbuild')
const os = require('os')
const child_process = require('child_process')
const getStream = require('get-stream');
const fs = require('fs')
const pathlib = require('path')
const pfbs = require('@tencent/pfbs')

const projectRoot = pathlib.join(__dirname, '..', '..')
exports.projectRoot = projectRoot;

const srcDir = pathlib.join(projectRoot, 'src')

const entryJsTemplate = fs.readFileSync(pathlib.join(projectRoot, 'src/entry.js')).toString()
const layoutTemplate = fs.readFileSync(pathlib.join(projectRoot, 'src/layout.html')).toString()

function requireUncached(module) {
  delete require.cache[require.resolve(module)];
  return require(module);
}

// 根据入口文件，生成单一html入口
function compileCaseToBundleHtml(benchmarkCaseFile) {
  const tempJsTarget = pathlib.join(os.tmpdir(), pathlib.basename(benchmarkCaseFile));

  const { benchmark } = requireUncached(benchmarkCaseFile)

  // 生成js文件
  const entryWithBenchmarkContent = entryJsTemplate.replace(`{{{benchmark_case}}}`, './' + pathlib.relative(srcDir, benchmarkCaseFile))
  esbuild.buildSync({
    bundle: true,
    outfile: tempJsTarget,
    stdin: {
      contents: entryWithBenchmarkContent,
      resolveDir: srcDir,
    },
    tsconfig: pathlib.join(projectRoot, 'jsconfig.json')
  })
  const jsBundle = fs.readFileSync(tempJsTarget).toString();
  fs.unlinkSync(tempJsTarget);
  // END 生成js文件

  // 生成html文件
  const bundleHtml = layoutTemplate
    .replace(`{{{benchmark_html}}}`, benchmark.html || '')
    .replace(`{{{benchmark_style}}}`, benchmark.style  || '')
    .replace(`{{{benchmark_js}}}`, jsBundle)

  // END 生成html文件

  return bundleHtml
}
exports.compileCaseToBundleHtml = compileCaseToBundleHtml;

function genBinPath(binName) {
  return pathlib.join(__dirname, 'pfbs', binName);
}

async function pfbsCompile(fileContent) {
  return pfbs(fileContent)
}
exports.pfbsCompile = pfbsCompile;
