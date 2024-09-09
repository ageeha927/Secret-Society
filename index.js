const http = require('http');
const fs = require('fs');

http
    .createServer((req, res) => {
        // Conditional Rendering
        switch (req.url) {
            case '/': 
                // Home
                fs.readFile("./index.html", (err, data) => {
                    res.end(data);
                });
                break;
            }
    })