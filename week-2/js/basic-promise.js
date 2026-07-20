const fs = require("fs");

function printContent(err, data) {
    if (err) {
        console.log("Error reading the file");
    }

    console.log(data);
}

setTimeoutPromisified(5000).then(fs.readFile(printContent));