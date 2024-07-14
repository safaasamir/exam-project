let open_eye = document.getElementById("eye1");
let email = document.getElementById("email");
let errorEmail = document.getElementsByClassName("error")[0];

function validEmail() {
  let regixEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  if (!regixEmail.test(email.value)) {
    email.setAttribute("class", "input-group__input__Error");
    errorEmail.style.display = "block";
    return false;
  } else {
    email.setAttribute("class", "input-group__input");
    errorEmail.style.display = "none";
    return email.value;
  }
}

let password = document.getElementById("password");
let errorPassword = document.getElementsByClassName("error")[1];

function validPassword() {
  if (!password.value || password.value.length < 8) {
    password.setAttribute("class", "input-group__input__Error");
    errorPassword.style.display = "block";
    return false;
  } else {
    password.setAttribute("class", "input-group__input");
    errorPassword.style.display = "none";
    return password.value;
  }
}

function login(e) {
  const enteredEmail = email.value;
  const enteredPassword = password.value;

  let userList = JSON.parse(localStorage.getItem("userList")) || [];
  


  let user = userList.find((user) => user.email === enteredEmail);
  

  if (!user) {
    email.setAttribute("class", "input-group__input__Error");
    errorEmail.textContent = "Email not registered";
    errorEmail.style.display = "block";
    e.preventDefault();
    return false;
  }

  if (user.password !== enteredPassword) {
    password.setAttribute("class", "input-group__input__Error");
    errorPassword.textContent = "Incorrect password";
    errorPassword.style.display = "block";
    e.preventDefault();
    return false;
  }
  localStorage.setItem("fname", user.fname);
  localStorage.setItem("lname", user.lname);
  // Login successful, you can proceed here
  console.log("Login successful");
}

let a;

function Pass_Eye() {
  if (a == 1) {
    open_eye.setAttribute("class", "fa-solid fa-eye-slash");
    password.setAttribute("type", "password");
    a = 0;
  } else {
    open_eye.setAttribute("class", "fa-solid fa-eye");
    password.setAttribute("type", "text");
    a = 1;
  }
}
