import express from "express";
import bodyParser from "body-parser";

// App configs
const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the product recommender API!");
});

// 404 route
app.all("*", (req, res) => {
  res.send("This route does not exist.")
});

// Start server
app.listen(port, () => {
  console.log("App listening on port: " + port);
});