const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const confirmPass = document.querySelector("#confirm_pass");
const gender = document.querySelector('input[name="gender"]');

const signUp = document.querySelector("#signup");

signUp.addEventListener("submit", function (e) {
  const userValid = isUsernameValid();
  const emailValid = isEmailValid();
  const passValid = isPasswordValid();
  const confirm = confirmPassword();
  const genderInput = genderValidation();

  e.preventDefault();

  if (userValid && emailValid && passValid && confirm && genderInput) {
    alert("All fields are Valid");
  } else {
    alert("Fields are invalid");
  }
});

function showMessage(input, message) {
  const msg = input.parentNode.querySelector("small");
  msg.innerText = message;
}

function isUsernameValid() {
  if (username.value === "") {
    showMessage(username, "Enter username");
    return false;
  }
  return true;
}
function isEmailValid() {
  const eval = email.value;
  const eRegex = new RegExp(
    "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/"
  );

  if (!eval) {
    return showMessage(email, "enter email");
  } else if (!eRegex.test(eval)) {
    return showMessage(email, "enter valid email");
  }
  return true;
}
function isPasswordValid() {
  const pass1 = password.value;
  const passRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16})"
  );

  if (!pass1) {
    showMessage(password, "enter password");
    return false;
  } else if (!passRegex.test(pass1)) {
    showMessage(password, "enter valid password");
    return false;
  }
  return true;
}

function confirmPassword() {
  const confirm_pass = confirmPass.value;
  if (!confirm_pass) {
    showMessage(confirmPass, "enter password again");
    return false;
  } else if (pass1 !== confirm_pass) {
    showMessage(confirmPass, "password does not match");
    return false;
  }
  return true;
}
function genderValidation() {
  if (gender.checked) {
    return true;
  } else {
    showMessage(gender, "select gender");
    return false;
  }
}
