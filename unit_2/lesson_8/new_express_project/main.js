"use strict";

const port = 3000,
    // Add the express module to your application.
    express = require("express"),
    // Assign the express application to the app constant.
    app = express();
app
    .get("/", (req, res) => {
        console.log("Request parameters:",req.params);
        console.log("Request body:",req.body);
        console.log("Request URL:",req.url);
        console.log("Request query:",req.query);
        // Issue a response from the server to the client with res.send.
        res.send("Hello, World!");
    })
    // Set up the application to listen at port 3000.
    .listen(port, () => {
        console.log(`The Express.js server has started and is listening on port number: ${port}`);
    });
