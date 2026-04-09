const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile('index.html', 'utf8', (err, htmlContent) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading HTML');
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(htmlContent);
        });
    }
    else if (req.url === '/app.css') {
        fs.readFile('app.css', 'utf8', (err, cssContent) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading CSS');
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            res.end(cssContent);
        });
    }
    else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
