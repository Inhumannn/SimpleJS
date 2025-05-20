async function init() {
  const todos = await data();
  displayToDoList(todos);
  deleteToDoList();
  addToDoList(todos);
}
init();

async function data() {
  try {
    const rep = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    return (todos = await rep.json());
  } catch (err) {
    console.log("Error: ", err);
  }
}

function displayToDoList(todos) {
  const listGroup = document.querySelector(".list-group");
  listGroup.innerHTML = "";

  todos.forEach((todo) => {
    const { id, title } = todo;
    const listGroupItem = `
      <li class="todo list-group-item d-flex align-items-center">
        <input class="form-check-input" type="checkbox" id="todo-${id}" />
        <label class="ms-2 form-check-label" for="todo-${id}">
          ${title}
        </label>
        <label class="ms-auto btn btn-danger btn-sm">
          <i class="bi-trash"></i>
        </label>  
      </li>
    `;
    listGroup.insertAdjacentHTML("beforeend", listGroupItem);
  });
}

function deleteToDoList() {
  const btnDeletes = document.querySelectorAll(".btn-danger");
  btnDeletes.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const todoItem = e.target.closest("li.todo");
      todoItem.remove();
    });
  });
}

function addToDoList(todos) {
  const btnAdd = document.querySelector("#btnAdd");

  btnAdd.addEventListener("click", async (e) => {
    e.preventDefault();
    const newTitle = document.querySelector(".form-control").value;

    const newTodo = {
      title: newTitle,
      completed: false,
      userId: 1,
    };

    try {
      const rep = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      const newData = await rep.json();
      console.log(newData);
      todos.push(newData);

      displayToDoList(todos);
      deleteToDoList();

      newTitle.value = "";
    } catch (err) {
      console.log("Error: ", err);
    }
  });
}
