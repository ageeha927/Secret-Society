const http = require('http')
const fs = require('fs')

http
    .createServer((req, res) => {
        // Conditional Rendering
        switch (req.url) {
            case '/': 
                fs.readFile("index.html", (err, data) => {
                    res.end(data)
                });
                break
            case '/6': 
                fs.readFile("puzz1.html", (err, data) => {
                    res.end(data)
                });
                break
            case '/yes': 
                fs.readFile("puzz2.html", (err, data) => {
                    res.end(data)
                });
                break
            case '/yellow': 
                fs.readFile("puzz3.html", (err, data) => {
                    res.end(data)
                });
            break
            case '/thebeemovie': 
                fs.readFile("puzz4.html", (err, data) => {
                    res.end(data)
                });
            break
            }
    }).listen(3000)