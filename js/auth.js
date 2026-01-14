function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  if (!email || !password) {
    msg.textContent = "Preencha todos os campos.";
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);
  localStorage.setItem("logged", "true");

  window.location.href = "index.html";
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  const savedEmail = localStorage.getItem("userEmail");
  const savedPassword = localStorage.getItem("userPassword");

  if (email === savedEmail && password === savedPassword) {
    localStorage.setItem("logged", "true");
    window.location.href = "index.html";
  } else {
    msg.textContent = "E-mail ou senha incorretos.";
  }
}

function logout() {
  localStorage.removeItem("logged");
  window.location.href = "login.html";
}
