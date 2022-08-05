document.getElementById("contact-form").addEventListener("submit", addPost);

function addPost(preventForm) {
  preventForm.preventDefault(); //que no es faci el submit si no hi ha res escrit
  let userName = document.getElementById("form-name").value;
  let userEmail = document.getElementById("form-email").value;
  let userPhone = document.getElementById("form-phone").value;
  let message = document.getElementById("form-message").value;

  fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    headers: {
      Accept: "text/plain, application/json, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
      phone: userPhone,
      message: message,
    }),
  })
    .then((response) => response.json())
    .then((dataForm) => {
      console.log(dataForm);
      let content = `
      <div class="result-container">
      <p class="body-intro-reg dark">Hey, the form was succesfully sent, Thank you Bro!!!</p><p>
  Wu Tang Class is the best in IronHack!!!</p>
       <img src="../images/succes.svg" alt="form sended succesfully" class= "form-result">
  <a href="./contact.html" class="both-buttons headline-med blue-button"
            >Go back to the form</a>
  </div>`;
      document.querySelector("#contact-form").innerHTML = content;
    })
    .catch((error) => {
      let content = `
      <div class="result-container">
      <p class="body-intro-reg dark">Submition Error!!! Try it latter</p>
      <img src="../images/error.svg" alt="error sendingg the form" class= "form-result">
    <a href="./contact.html" class="both-buttons headline-med blue-button"
            >Go back to the form</a>
  </div>`;
      document.querySelector("#contact-form").innerHTML = content;
    });
}
