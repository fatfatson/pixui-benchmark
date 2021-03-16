const moduleAlias = require('module-alias')
const pathlib = require('path')

// Or multiple aliases
moduleAlias.addAliases({
  '@': pathlib.join(__dirname, 'src'),
})
