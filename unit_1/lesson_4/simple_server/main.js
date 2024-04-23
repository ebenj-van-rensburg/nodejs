const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((request, response) => {
        console.log("Incoming Request: Recieved");
        response.writeHead(httpStatus.OK, {
            "Content-Type": "text/html"
        });
        let date = new Date();
        let responseMessage = `<h1>Welcome, the date is: ${date}</h1>`;
        response.write(responseMessage);
        response.end();
        console.log(`Sent a response : ${responseMessage}`);
    });

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);