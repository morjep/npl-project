function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  const formText = document.getElementById("name").value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/test")
    .then((res) => res.json())
    .then((res) => {
      document.getElementById("results").innerHTML = res.message;
    });

  const formdata = new FormData();
  formdata.append("key", "2833660a909ea73031bbce0a6845c5b0");
  formdata.append("txt", "Main dishes were quite good, but desserts were too sweet for me.");
  formdata.append("lang", "en"); // 2-letter code, like en es fr ...

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = fetch(
    "https://api.meaningcloud.com/sentiment-2.1",
    requestOptions
  )
    .then((response) => ({
      status: response.status,
      body: response.json(),
    }))
    .then(({ status, body }) => console.log(status, body))
    .catch((error) => console.log("error", error));
}

export default handleSubmit;
