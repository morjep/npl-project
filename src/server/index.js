const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

// Init dotenv
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static("dist"));

console.log(__dirname);

app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8081, () => {
  console.log("Example app listening on port 8081!");
});

/**
 * Logs the request method and url to the console.
 * @param req - the request object
 */
function logRequest(req) {
  console.log(`${req.method} request on ${req.url}`);
}

app.get("/test", (req, res) => {
  logRequest(req);
  res.send(mockAPIResponse);
});

const jsonTest = {
  title: "test json response",
  message: "this is a message",
  time: "now",
};

app.post("/sentiment", (req, res) => {
  logRequest(req);
  res.send(JSON.stringify(jsonTest));
});
