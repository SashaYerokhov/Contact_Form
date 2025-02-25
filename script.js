const form = document.querySelector("#form");
const firstNameInput = document.querySelector("#nameFirst");
const lastNameInput = document.querySelector("#nameLast");
const emailInput = document.querySelector("#email-cart");
const textInput = document.querySelector("#contactMsg");
const contactQuery = document.querySelector(".contact__query");
const radioBtn = document.querySelectorAll("[type='radio']");
const cartConnect = document.querySelector(".cart__concent");
const cartCheck = document.querySelector("[type='checkbox']");
const submit = document.querySelector(".btn");
const cartModal = document.querySelector(".cart__modal");

function nameValid(name) {
  const reg = /^[a-zA-Z]{3,}$/;
  return reg.test(name);
}

function emailValid(email) {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}

form.addEventListener("submit", (event) => {
  //   event.preventDefault();
  validateForm();

  if (formValid() === true) {
    event.preventDefault();
    cartModal.classList.add("success");    
  }
form.reset();
});

function formValid() {
  const contactsInput = form.querySelectorAll(".contact__input");

  let result = true;
  contactsInput.forEach((contact) => {
    if (contact.classList.contains("error")) {
      result = false;
      }
  });
  return result;
}

function validateForm() {
  if (firstNameInput.value.trim() == "") {
    error(firstNameInput, "This field is required");
  } else if (nameValid(firstNameInput.value)) {
    success(firstNameInput);
  }

  if (lastNameInput.value.trim() == "") {
    error(lastNameInput, "This field is required");
  } else if (nameValid(lastNameInput.value)) {
    success(lastNameInput);
  }

  if (emailInput.value.trim() === "") {
    error(emailInput, "Please enter a valid email address");
  } else if (emailValid(emailInput.value)) {
    success(emailInput);
  }

  validateRadio();

  //   message - textarea
  if (textInput.value.trim() === "") {
    error(textInput, "This field is required");
  } else {
    success(textInput);
  }

  validateCheck();
}

function error(element, message) {
  const parrent = element.parentElement;
  if (parrent.classList.contains("success"))
    parrent.classList.remove("success");
  parrent.classList.add("error");
  const p = parrent.querySelector("p");
  p.textContent = message;
}

function success(element) {
  const parrent = element.parentElement;
  parrent.classList.add("success");
  if (parrent.classList.contains("error")) {
    parrent.classList.remove("error");
  }
  const p = parrent.querySelector("p");
}

function validateRadio() {
  const msgError = document.querySelector(".contact__query p");
  var btnValid = false;
  for (var i = 0; i < radioBtn.length; i++) {
    if (radioBtn[i].checked) {
      btnValid = true;
      contactQuery.classList.remove("error");
      break;
    }
  }
  if (!btnValid) {
    contactQuery.classList.add("error");
    return false;
  }
}

function validateCheck() {
  const checkError = document.querySelector(".cart__concent p");
  var checkValid = false;
  if (cartCheck.checked) {
    checkValid = true;
    cartConnect.classList.remove("error");
  }
  if (!checkValid) {
    cartConnect.classList.add("error");
    return false;
  }
}
