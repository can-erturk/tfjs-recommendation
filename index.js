import express from "express";
import bodyParser from "body-parser";
import analyticsRoute from "./src/routes/analytics.js";
import productRoute from "./src/routes/product.js";

// App configs
const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/analytics", analyticsRoute);
app.use("/api/product", productRoute);

// 404 route
app.all("*", (req, res) => {
  res.send("This route does not exist.")
});

// Start server
app.listen(port, () => {
  console.log("App listening on port: " + port);
});