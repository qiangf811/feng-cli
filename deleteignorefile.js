const path = require('path')
const fs = require('fs')

const deleteFiles = ['.DS_Store']
const ignore = ['node_modules', '.git']

const iterator = (basePath, fn) => {
  try {
    const files = fs.readdirSync(basePath)
    for (const file of files) {
      if (!ignore.includes(file)) {
        if (fs.lstatSync(path.resolve(basePath, file)).isFile()) {
          if (deleteFiles.includes(file)) {
            fn.call(this, path.resolve(basePath, file))
          }
        } else {
          iterator(path.resolve(basePath, file), fn)
        }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

const iteratorDir = (path, fn) => {
  return iterator(path, fn)
}

iteratorDir(process.cwd(), fs.unlinkSync)

module.export = iteratorDir
