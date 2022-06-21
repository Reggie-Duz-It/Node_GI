  const fs = require('fs');
  let fileContent = fs.readFileSync('/Users/reginalddevarel/Documents/text/planets.txt', 'utf8');
  const str = fileContent.toString();
  console.log(str);

