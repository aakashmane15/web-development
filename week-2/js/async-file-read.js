const fs = require("fs");

function readFileAsync(filePath) {
    return new Promise(function(resolve) {
        fs.readFile(filePath, "utf-8", function(err, data) {
            resolve(data);
        });
    });
}

async function solve() {
    const data1 = await readFileAsync("../sample-files/a.txt");
    console.log("File read");    
    console.log("File contents: " + data1);

    const data2 = await readFileAsync("../sample-files/b.txt");
    console.log("File read");    
    console.log("File contents: " + data2);
}

solve();