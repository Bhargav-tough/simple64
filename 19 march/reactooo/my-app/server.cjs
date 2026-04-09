const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5000;

http.createServer((req, res) => {
  let file = req.url === "/" ? "index.html" : req.url;

  fs.readFile(path.join(__dirname, "dist", file), (err, data) => {
    if (err) {
      // fallback for React routes
      fs.readFile(path.join(__dirname, "dist", "index.html"), (err2, data2) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data2);
      });
    } else {
      res.end(data);
    }
  });
}).listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});