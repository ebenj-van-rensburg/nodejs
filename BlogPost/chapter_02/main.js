const express = require("express"),
    app = express(),
    path = require("path");

app.use(express.static("public"))

app.listen(3000, () => {
    console.log("Listening on port: 3000")
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/pages", "index.html"))
})


app.get("/about", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/pages", "about.html"))
})


app.get("/contact", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/pages", "contact.html"))
})
// http = require("http"),
//     fs = require("fs");
// const homePage = fs.readFileSync("pages/index.html"),
//     server = http.createServer((req, res) => {
//         console.log(req.url);
//         if (req.url === '/about') {
//             res.end(fs.readFileSync("pages/about.html"));
//         } else if (req.url === '/contact') {
//             res.end(fs.readFileSync("pages/contact.html"));
//         } else if (req.url === '/') {
//             res.end(fs.readFileSync("pages/index.html"));
//         } else {
//             res.writeHead(404);
//             res.end(fs.readFileSync("public/404.html"));
//         }
//     });

// server.listen(3000);