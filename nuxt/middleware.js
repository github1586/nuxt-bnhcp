
let files = require.context('@/middleware', false, /^\.\/(?!-)[^.]+\.(mjs|js)$/)
let filenames = files.keys()

function getModule (filename) {
  let file = files(filename)
  return file.default
    ? file.default
    : file
}
let middleware = {}

// Generate the middleware
for (let filename of filenames) {
  let name = filename.replace(/^\.\//, '').replace(/\.(mjs|js)$/, '')
  middleware[name] = getModule(filename)
}

export default middleware

