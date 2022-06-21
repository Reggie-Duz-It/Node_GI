const fs = require('fs');
fs.readFile(process.argv[2], (err, data) => {
    if (err) {return console.log(err)} 

let str = data.toString().split("\n");
console.log(str.length-1);
})

