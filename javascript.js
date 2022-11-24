
let password = document.getElementById("pw");
let confirmpw = document.getElementById("confirmpw");
let pwcheck = document.getElementById("pwcheck");
let pwInputs = document.querySelectorAll(".pw-input");

//If passwords match, tell the user they match, make input green and give it
//  the attribute isvalid="true".

//If passwords don't match, tell the user they don't, make input red and give it
//  the attribute isvalid="false".
pwInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (confirmpw.value.length !== 0) {
      if (password.value == confirmpw.value) {
        pwcheck.textContent = "Passwords Match";
        pwcheck.style.color = "rgb(98, 168, 57)";
        pwInputs.forEach((input) => {
          input.setAttribute("isvalid", "true");
          input.setAttribute("style", "outline-color: rgb(98, 168, 57);");
        });
      } else {
        pwcheck.textContent = "Passwords do not match";
        pwcheck.style.color = "rgb(196, 38, 59)";
        pwInputs.forEach((input) => {
          input.setAttribute("isvalid", "false");
          input.setAttribute("style", "outline-color: rgb(196, 38, 59);");
        });
      }
    }
  })
})

//If passwords dont match when submitting, don't submit the form.
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  if (confirmpw.getAttribute("isvalid") == "false") {
    event.preventDefault();
    pwInputs.forEach((input) => {
      input.setAttribute("style", "border-color: red;")
    })
  }
})
