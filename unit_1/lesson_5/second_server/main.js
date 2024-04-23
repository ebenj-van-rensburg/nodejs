const routeResponseMap = {
    "/": "<h1>Welcome</h1>",
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>Learn More About Us.</h1>",
    "/hello": "<h1>Say hello by emailing us here</h1>",
    "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
};

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((req, res) => {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        if (routeResponseMap[req.url]) {
            res.end(routeResponseMap[req.url]);
        } else {
            res.end("<h1>Sorry the page you are looking for is not here.</h1>");
        }
    });
app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);

// const port = 3000,
//     http = require("http"),
//     httpStatus = require("http-status-codes"),
//     app = http.createServer(),
//     getJSONString = obj => {
//         return JSON.stringify(obj, null, 2);
//     };
// app.on("request", (req, res) => {
//     var body = [];
//     req.on("data", (bodyData) => {
//         body.push(bodyData);
//     });
//     req.on("end", () => {
//         body = Buffer.concat(body).toString();
//         console.log(`**********\nRequest Body Contents:\n${body}\n**********\n`);
//     });
//     console.log("**********\nMethod: ", getJSONString(req.method));
//     console.log("**********\nURL: ", getJSONString(req.url));
//     console.log("**********\nHeaders: ", getJSONString(req.headers));
//     res.writeHead(httpStatus.OK, {
//         "Content-Type": "text/html"
//     });
//     let date = new Date();
//     let responseMessage = `<h1>The date is: ${date}</h1>`;
//     res.end(responseMessage);
// });
// app.listen(port);
// console.log(`The server has started and is listening on port number: ${port}`);
