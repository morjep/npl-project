const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const FormData = require("form-data");
const fetch = require("node-fetch");

const app = express();

// Init dotenv
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

/* It sends a request to the MeaningCloud API and returns the response. */
app.post("/sentiment", (req, res) => {
  logRequest(req);
  console.log(req.body.url);
  sentimentData = sentiment(req.body.url);
  sentimentData.then(function(result) {
    console.log(result);
    res.send(JSON.stringify(result));
  });
});


/**
 * It sends a request to the MeaningCloud API and returns the response.
 * @param data - The text to be analyzed.
 */
const sentiment = async (data) => {
  /* It creates a new FormData object and adds the API key and the text to be
  analyzed to it. */
  const formdata = new FormData();
  formdata.append("key", process.env.API_KEY);
  formdata.append("txt", data);
  formdata.append("lang", "auto"); // 2-letter code, like en es fr ...

  /* Creating a new object that contains the request options. */
  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = await fetch(
    "https://api.meaningcloud.com/sentiment-2.1",
    requestOptions
  )

  try {
    const apiData = await response.json();
    return apiData;
  } catch (error) {
    console.log("error", error);
  }
};