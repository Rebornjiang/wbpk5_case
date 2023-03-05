const path = require('path')
const ROOT_DIR = process.cwd()

function resolvePath(relativePath) {
    return path.resolve(ROOT_DIR, relativePath)
}


module.exports = resolvePath