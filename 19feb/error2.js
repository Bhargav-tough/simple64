const fs = require("fs");

fs.readFile("foo.txt", function(err, data) {
    if (err) {
        console.error("Error reading foo.txt:", err);
    } else {
        console.log("Paisa nhi diya");
        console.log(data.toString());
    }
});

fs.readFile("mytext.txt", function(err, data) {
    if (err) {
        console.error("Error reading mytext.txt:", err);
    } else {
        console.log("Contents of mytext.txt:");
        console.log(data.toString());
    }
});
