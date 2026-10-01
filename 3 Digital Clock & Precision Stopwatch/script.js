/*
    ALGORITHM: To-Do List Tracker (Data & LocalStorage Driven)

    1. SETUP:
       - Load the to-do list array from LocalStorage using `JSON.parse(localStorage.getItem('todoList'))`.
       - If no saved data exists, initialize `todoList` with a default array of task objects (each having `name` and `dueDate`).
       - Get the task name input element, due date input element, "Add" button, and task container `<div>`.

    2. RENDER FUNCTION (`renderTodoList()`):
       - Initialize an empty HTML string `todoListHTML = ''`.
       - Loop through `todoList` using `.forEach((todoObject, index) => { ... })`:
           - Destructure `name` and `dueDate` from `todoObject`.
           - Generate HTML elements for the task name, date, and a "Delete" button containing class `js-delete-todo-button`.
           - Append the generated HTML to `todoListHTML`.
       - Set the task container's `.innerHTML` to `todoListHTML`.
       - Select all delete buttons using `document.querySelectorAll('.js-delete-todo-button')`.
       - Attach a click event listener to each delete button:
           - Remove the task at that `index` using `todoList.splice(index, 1)`.
           - Save updated array to LocalStorage.
           - Call `renderTodoList()` to refresh the screen.

    3. ADD TASK LOGIC:
       - When "Add" button is clicked:
           - Read values from the name and due date inputs.
           - If task name is empty, stop execution.
           - Push new object `{ name, dueDate }` into `todoList`.
           - Clear input fields.
           - Save updated `todoList` to LocalStorage with `JSON.stringify()`.
           - Call `renderTodoList()` to refresh the screen.

    4. INITIALIZATION:
       - Call `renderTodoList()` once on startup.
*/

// WRITE YOUR CODE BELOW:

let todoList = JSON.parse(localStorage.getItem('todoList'));

if (!todoList) {
  todoList = [
    {
      name: 'make dinner',
      dueDate: '2022-12-22'
    },
    {
      name: 'wash dishes',
      dueDate: '2022-12-22'
    }
  ];
}

const todoInput = document.querySelector('.js-name-input');
const dueDateInput = document.querySelector('.js-due-date-input');
const addButton = document.querySelector('.js-add-todo-button');
const todoContainer = document.querySelector('.js-todo-list');

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;

    todoListHTML += `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="js-delete-todo-button">Delete</button>
    `;
  });

  todoContainer.innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);

        localStorage.setItem('todoList', JSON.stringify(todoList));

        renderTodoList();
      });
    });
}

addButton.addEventListener('click', () => {
  const name = todoInput.value;
  const dueDate = dueDateInput.value;

  if (name === '') {
    return;
  }

  todoList.push({
    name: name,
    dueDate: dueDate
  });

  todoInput.value = '';
  dueDateInput.value = '';

  localStorage.setItem('todoList', JSON.stringify(todoList));

  renderTodoList();
});

renderTodoList();