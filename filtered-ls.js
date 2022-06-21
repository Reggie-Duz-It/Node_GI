const fs = require('fs');
const path = require('path');

let folder = process.argv[2];
let ext = '.' + process.argv[3];
fs.readdir(folder, (err, lists) => {
    if (err) {throw err}
    lists.forEach(function (list) {
    if (path.extname(list) === ext){
        console.log(list)
    }
})
})
