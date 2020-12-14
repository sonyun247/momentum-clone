const toDoForm = document.querySelector(".js-toDo-form"),
  toDoInput = toDoForm.querySelector(".js-toDo-form__input"),
  toDoList = document.querySelector(".js-toDo-list");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id, 10);
  });
  toDos = cleanToDos;
  saveToDos();
}
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const newId = toDos.length + 1;
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  span.innerText = text;
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  li.id = newId;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}
function initTodo() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
initTodo();
