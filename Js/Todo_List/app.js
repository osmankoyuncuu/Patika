//?Selectors
const listUl = document.getElementById("list");
const input = document.getElementById("task");
const addBtn = document.getElementById("liveToastBtn");
const containerDiv = document.querySelector(".container");

//?localStroge

let todos = JSON.parse(localStorage.getItem("TODOS")) || [];
console.log(todos);

const renderSavedTodos = () => {
  todos.forEach((todo) => {
    createListElement(todo);
    console.log(todo);
  });
};
renderSavedTodos();

//?onclick
containerDiv.addEventListener("click", (e) => {
  //? add button
  if (e.target.classList.contains("button")) {
    if (input.value.trim() === "") {
      //? error alert
      $(".error").toast("show");
    } else {
      const newTodo = {
        id: new Date().getTime(),
        completed: false,
        text: input.value,
      };
      //?add
      createListElement(newTodo);
      //?localStroge update
      todos.push(newTodo);
      localStorage.setItem("TODOS", JSON.stringify(todos));
      console.log(todos);
      $(".success").toast("show");
    }
  } else if (e.target.classList.contains("liElement")) {
    //? checked
    e.target.classList.toggle("checked");
    todos.map((todo, index) => {
      if (todo.id == e.target.getAttribute("id")) {
        todos[index].completed = !todos[index].completed;
      }
    });
    localStorage.setItem("TODOS", JSON.stringify(todos));
  } else if (e.target.classList.contains("fa-solid")) {
    //?delete
    e.target.parentElement.remove();
    todos = todos.filter(
      (todo) => todo.id !== Number(e.target.parentElement.getAttribute("id"))
    );
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }
});

//? Func.
function createListElement(newTodo) {
  const { id, completed, text } = newTodo;
  const li = document.createElement("li");
  li.setAttribute("id", id);
  li.setAttribute("class", "liElement");
  completed && li.classList.add("checked");
  li.innerText = text;
  const delIcon = document.createElement("i");
  delIcon.setAttribute("class", "fa-solid fa-x");
  li.appendChild(delIcon);
  listUl.appendChild(li);
  input.value = "";
  input.focus();
}
//?Enter keydown
input.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    addBtn.click();
  }
});
//? load
window.onload = () => {
  input.focus();
};
