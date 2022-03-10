const serverUrl = "http://localhost:8081";

export const isValidUrl = (url) => {
  try {
    new URL(url);
  } catch (e) {
    console.error(e);
    alert("Invalid URL");
    return false;
  }
  return true;
};

function handleSubmit(event) {
  event.preventDefault();

  /* Getting the value of the input field with the id of `name` */
  const formText = document.getElementById("name").value;
  console.log("::: Form Submitted :::");

  if (isValidUrl(formText)) {
    const json = {
      url: formText,
    };

    /* Sending a POST request to the server with the text that the user entered. */
    postData(serverUrl + "/sentiment", json).then((res) => {
      document.getElementById("results").innerHTML = res.agreement;
    });
  } else {
    document.getElementById("name").value = "Please enter valid URL";
  }
}

/**
 * Function postData
 * It takes a URL and some data,
 * and sends a POST request to that URL with the data
 * @param [url] - The URL to which the request is sent.
 * @param [data] - The data that will be sent to the server.
 * @returns The `postData` function returns a promise.
 */
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
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

export default handleSubmit;
