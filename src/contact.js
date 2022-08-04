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
  <p class="body-intro-reg dark">Hey, the form was succesfully sent, Thank you Bro!!!
  Wu Tang Class is the bestin IronHack!!!</p>
  `;
      document.querySelector("#contact-form").innerHTML = content;
    })
    .catch((error) => {
      let content = `
  <p class="body-intro-reg dark">Submition Error!!! Try it latter</p>
  `;
      document.querySelector("#contact-form").innerHTML = content;
    });
}
