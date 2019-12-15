const form = document.querySelector(".js-form"),
  input = form.querySelector("input");

const user_ls = "currentUser";

function loadName() {
  const currentUser = localStorage.getItem(user_ls);
}

function init() {
  loadName();
}
