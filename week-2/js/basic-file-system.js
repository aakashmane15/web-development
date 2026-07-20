const fs = require('fs');

let content = fs.readFileSync("../sample-files/a.txt", "utf-8");
console.log("The contents of the file are: \n" + content);