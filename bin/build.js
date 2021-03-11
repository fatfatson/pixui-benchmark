const pathlib = require('path')
const glob = require('glob')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const fs = require('fs')
const esbuild = require('esbuild')
const os = require('os')
const child_process = require('child_process')
const getStream = require('get-stream');

const moduleAlias = require('module-alias')

// Or multiple aliases
moduleAlias.addAliases({
  '@': pathlib.join(__dirname, '..', 'src'),
})

function requireUncached(module) {
  delete require.cache[require.resolve(module)];
  return require(module);
}

const projectRoot = pathlib.join(__dirname, '..')
const srcDir = pathlib.join(projectRoot, 'src')
const distDir = pathlib.join(projectRoot, 'dist')
rimraf.sync(distDir)

const entryJsTemplate = fs.readFileSync(pathlib.join(projectRoot, 'src/entry.js')).toString()
const layoutTemplate = fs.readFileSync(pathlib.join(projectRoot, 'src/layout.html')).toString()

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
if (!module.parent) {
  main()
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
  const binPath = {
    'darwin': genBinPath('pfbs'),
    'linux': genBinPath('pfbs-linux'),
  }[process.platform];

  const child = child_process.spawn(binPath, ['--src', 'stdin']);
  child.stdin.write(fileContent);
  child.stdin.end();

  const fbsContent = await getStream.buffer(child.stdout);

  return fbsContent
}
exports.pfbsCompile = pfbsCompile;
