const http = require("http"),
    fs = require("fs");
const homePage = fs.readFileSync("pages/index.html"),
    server = http.createServer((req, res) => {
        console.log(req.url);
        if (req.url === '/about') {
            res.end(fs.readFileSync("pages/about.html"));
        } else if (req.url === '/contact') {
            res.end(fs.readFileSync("pages/contact.html"));
        } else if (req.url === '/') {
            res.end(fs.readFileSync("pages/index.html"));
        } else {
            res.writeHead(404);
            res.end(fs.readFileSync("public/404.html"));
        }
    });

server.listen(3000);