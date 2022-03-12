const serverUrl = "http://localhost:8081";

function handleSubmit(event) {
  event.preventDefault();

  /* Getting the value of the input field with the id of `name` */
  const formText = document.getElementById("url").value;

  if (Client.isValidUrl(formText)) {
    const json = {
      url: formText,
    };

    /* Sending a POST request to the server with the text that the user entered. */
    postData(serverUrl + "/sentiment", json).then((res) => {
      const text = "URL: " + formText + "<br>" + "Sentiment: " + res.agreement + "<br>" + "Model: " + res.model;
      document.getElementById("results").innerHTML = text;
    });
  } else {
    alert("Invalid URL");
  }
  document.getElementById("url").value = "";
}

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  /* The try...catch block is used to catch any errors that may occur while parsing
  the JSON data. */
  try {
    const apiData = await response.json();
    return apiData;
  } catch (error) {
    console.log("error", error);
  }
};

export default handleSubmit;
