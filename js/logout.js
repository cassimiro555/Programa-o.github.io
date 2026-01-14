function logout() {
  localStorage.removeItem("logged");
  window.location.href = "login.html";
}
