const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const corsOptions = {
  origin:[
    "https://www.postman.com/lunar-space-683154/workspace/apitest/request/26009791-d814d4aa-fafc-4e50-afa5-96c45d977ae6",
    "http://localhost:3000",
    "https://nodemysqlcrud.herokuapp.com/",
    "https://nodemysqlcrud.herokuapp.com/quiz"
  ]
};

// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 3000;
// Enable CORS

app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// define a root route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
// Require employee routes
const quizRoutes = require("./src/routes/quiz.routes");
// using as middleware
app.use("/quiz", quizRoutes);
// listen for requests
app.listen(port, () => {
  console.log(`Quiz API started. Server is listening on port ${port}`);
});
