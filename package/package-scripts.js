const fs = require('fs')
let scripts = {}

function readJsonFile (filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

let configPaths = require('./default.paths.json')
const optionalConfigPath = 'colmjude-frontend.config.json'

if (fs.existsSync(optionalConfigPath)) {
  configPaths = {
    ...configPaths,
    ...readJsonFile(optionalConfigPath)
  }
}

scripts.build = {
  stylesheets: `npx node-sass ${configPaths.scssPath} -o ${configPaths.stylesheetsOutputPath} --include-path ${configPaths.colmjudeFrontendPath}`
}


scripts.watch = {
  assets: `npx chokidar ${configPaths.watchPaths} -c "npm run nps build.stylesheets"`,
  stylesheets: `npx chokidar ${configPaths.watchPaths} -c "npm run nps build.stylesheets"`,
}

module.exports = { scripts }
