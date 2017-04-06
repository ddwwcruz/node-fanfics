const fs = require('fs')
const path = require('path')

function deleteFolderRecursive(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath)
            } else {
                fs.unlinkSync(curPath)
            }
        })
        fs.rmdirSync(path)
    }
}

module.exports.deleteFolderRecursive = deleteFolderRecursive

function copyFolderRecursive(src, dest) {
    var exists = fs.existsSync(src)
    var stats = exists && fs.statSync(src)
    var isDirectory = exists && stats.isDirectory()
    if (exists && isDirectory) {
        fs.mkdirSync(dest)
        fs.readdirSync(src).forEach(function (childItemName) {
            copyFolderRecursive(path.join(src, childItemName),
                path.join(dest, childItemName))
        })
    } else {
        fs.linkSync(src, dest)
    }
}

module.exports.copyFolderRecursive = copyFolderRecursive
