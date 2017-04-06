const fs = require('fs')
const helpers = require('./helpers')

if (fs.existsSync('../@types/node-fanfics')) {
    helpers.deleteFolderRecursive('../@types/node-fanfics')
}
