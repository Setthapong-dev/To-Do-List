function addTodo() {
  const input = document.getElementById("todo-input");
  const text = input.value.trim();

  if (text === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${text}
    <button onclick="removeTodo(this)">Delete</button>
  `;

  document.getElementById("todo-list").appendChild(li);
  input.value = "";
}

function removeTodo(button) {
  const li = button.parentElement;
  li.remove();
}
