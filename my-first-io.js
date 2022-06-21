const fs = require('fs')
let fileContent = fs.readFileSync(process.argv[2])
const str = fileContent.toString().split("\n");
console.log(str.length - 1);