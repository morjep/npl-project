const serverUrl = "http://localhost:8081";

function handleSubmit(event) {
  event.preventDefault();

  /* Getting the value of the input field with the id of `name` */
  const formText = document.getElementById("name").value;
  console.log("::: Form Submitted :::");
  console.log(formText);

  // fetch("http://localhost:8081/test")
  //   .then((res) => res.json())
  //   .then((res) => {
  //     document.getElementById("results").innerHTML = res.message;
  //   });

  postData(serverUrl + "/sentiment", formText)
    .then((res) => {
      document.getElementById("results").innerHTML = res.message;
    });

  // const formdata = new FormData();
  // formdata.append("key", "2833660a909ea73031bbce0a6845c5b0");
  // formdata.append("txt", "Main dishes were quite good, but desserts were too sweet for me.");
  // formdata.append("lang", "en"); // 2-letter code, like en es fr ...

  // const requestOptions = {
  //   method: "POST",
  //   body: formdata,
  //   redirect: "follow",
  // };

  // const response = fetch(
  //   "https://api.meaningcloud.com/sentiment-2.1",
  //   requestOptions
  // )
  //   .then((response) => ({
  //     status: response.status,
  //     body: response.json(),
  //   }))
  //   .then(({ status, body }) => console.log(status, body))
  //   .catch((error) => console.log("error", error));
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
