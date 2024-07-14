let fname = document.getElementById("fname");
let errorFname = document.getElementsByClassName("error")[0];
function validFName() {
  regixName = /^[^\d]+$/;
  if (!regixName.test(fname.value)) {
    fname.setAttribute("class", "input-group__input__Error");
    errorFname.style.display = "block";
    return false;
  } else {
    fname.setAttribute("class", "input-group__input");
    errorFname.style.display = "none";
    return fname.value;
  }
}
let lname = document.getElementById("lname");
let errorLname = document.getElementsByClassName("error")[1];

function validLName() {
  regixName = /^[^\d]+$/;
  if (!regixName.test(lname.value)) {
    lname.setAttribute("class", "input-group__input__Error");
    errorLname.style.display = "block";
    return false;
  } else {
    lname.setAttribute("class", "input-group__input");
    errorLname.style.display = "none";
    return lname.value;
  }
}
let email = document.getElementById("email");
let errorEmail = document.getElementsByClassName("error")[2];
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
let errorPassword = document.getElementsByClassName("error")[3];
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
let re_password = document.getElementById("rePassword");
let errorre_password = document.getElementsByClassName("error")[4];
function validRe_Password() {
  if (re_password.value != password.value) {
    re_password.setAttribute("class", "input-group__input__Error");
    errorre_password.style.display = "block";
    return false;
  } else {
    re_password.setAttribute("class", "input-group__input");
    errorre_password.style.display = "none";
    return re_password.value;
  }
}
class user {
  constructor(fname, lname, email, password) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.password = password;
  }
}
function regestration(e) {
  let userList = JSON.parse(localStorage.getItem("userList")) || [];
   console.log(userList)
  if (
    !validFName() ||
    !validLName() ||
    !validEmail() ||
    !validPassword() ||
    !validRe_Password()
  ) {
    e.preventDefault();
    return false;
  }

  const newUser = new user(
    fname.value,
    lname.value,
    email.value,
    password.value
  );
  const emailStored = userList.some((user) => user.email === email.value);

  if (emailStored) {
    alert("Email address already registered!");
    e.preventDefault();
    return false;
  }

  userList.push(newUser);
  localStorage.setItem("userList", JSON.stringify(userList));
  
}
let a;

function Pass_Eye() {
  let open_eye = document.getElementById("eye1");
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
function RePass_Eye() {
  let open_eye2 = document.getElementById("eye2");
  if (a == 1) {
    open_eye2.setAttribute("class", "fa-solid fa-eye-slash");
    re_password.setAttribute("type", "password");
    a = 0;
  } else {
    open_eye2.setAttribute("class", "fa-solid fa-eye");
    re_password.setAttribute("type", "text");
    a = 1;
  }
}
