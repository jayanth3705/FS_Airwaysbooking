function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem(email));

  if (user && user.password === password) {
    localStorage.setItem("loggedInUser", email);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}
function signup(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (localStorage.getItem(email)) {
    alert("User already exists");
    return;
  }

  const user = { name, email, password };
  localStorage.setItem(email, JSON.stringify(user));

  alert("Signup successful. Please login.");
  window.location.href = "login.html";
}
