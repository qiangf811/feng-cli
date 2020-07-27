const execa = require('execa')
const binPath = require.resolve('./bin/winning-init')
console.log('命令行参数', process.argv)
execa(
  binPath,
  process.argv.slice(process.argv.indexOf('init') + 1),
  { stdio: 'inherit' }
)
