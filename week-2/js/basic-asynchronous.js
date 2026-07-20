const fs = require("fs");

function printContent(err, data) {
    if (err) {
        console.log("Error readinfg the file\n");
    }
    
    console.log(data);
}

fs.readFile("../sample-files/a.txt", "utf-8", printContent);
fs.readFile("../sample-files/b.txt", "utf-8",printContent);

console.log("File content read!");