const fs = require('fs')

const helpers = require('./helpers')

if (!fs.existsSync('../@types/')) {
    fs.mkdirSync('../@types/')
}
if (fs.existsSync('../@types/node-fanfics')) {
    helpers.deleteFolderRecursive('../@types/node-fanfics')
}

helpers.copyFolderRecursive('./typings', '../@types/node-fanfics')
