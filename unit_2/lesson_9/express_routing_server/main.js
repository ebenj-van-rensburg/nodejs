// "use strict";

// const port = 3000,
//     // Add the express module to your application.
//     express = require("express"),
//     // Assign the express application to the app constant.
//     app = express();
// app
//     .use((req, res, next) => {
//         console.log(`request made to: ${req.url}`);
//         next();
//     })
//     .post("/contact", (req, res) => {
//         res.send("Contact information submitted successfully.");
//     })
//     .get("/items/:vegetable", (req, res) => {
//         res.send(`This is a page for ${req.params.vegetable}`);
//     });


"use strict";

const port = 3000,
    // Add the express module to your application.
    express = require("express"),
    // Assign the express application to the app constant.
    app = express(),
    homeController = require("./controllers/homeController");

// Define a middleware function.
app.use((req, res, next) => {
    //Log the request’s path to console.
    console.log(`request made to: ${req.url}`);
    // Call the next function.
    next();
});


// Tell your Express.js application to parse URL-encoded data.
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

// Create a new post route for the home page.
app.post("/", (req, res) => {
    // Log the request’s body and query.
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful");
});

// Handle GET requests to "/items/:vegetable".
app.get("/items/:vegetable", homeController.sendReqParam);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
