function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  const formText = document.getElementById('name').value;
  Client.checkForName(formText);

  console.log('::: Form Submitted :::');
  fetch('http://localhost:8081/test')
    .then((res) => res.json())
    .then((res) => {
      document.getElementById('results').innerHTML = res.message;
    });
}

export default handleSubmit;
