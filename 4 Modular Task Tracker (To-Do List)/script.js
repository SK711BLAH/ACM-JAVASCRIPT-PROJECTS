/*
    ALGORITHM: To-Do List

    1.  SETUP:
        - Get the text input element for new tasks.
        - Get the "Add Task" button element.
        - Get the `<ul>` element where tasks will be displayed.

    2.  EVENT LISTENER:
        - Add a 'click' event listener to the "Add Task" button.

    3.  ADD TASK LOGIC (inside the button's click event handler):
        - Get the text from the input field and remove any leading/trailing whitespace.
        - If the text is empty, stop the function.
        - If the text is not empty:
            - Create a new list item (`<li>`) element.
            - Set the text of the `<li>` to the task text.
            - Create a new button element for deleting the task. Set its text to 'Remove'.
            - Add a 'click' event listener to this new 'Remove' button. When clicked, it should find its parent `<li>` and remove it from the list (`<ul>`).
            - Append the 'Remove' button inside the `<li>`.
            - Append the new `<li>` to the task list (`<ul>`).
            - Clear the text in the input field.
*/
// WRITE YOUR CODE BELOW:

const taskInput = document.querySelector('#taskInput');
const addButton = document.querySelector('#addTask');
const taskList = document.querySelector('#taskList');

addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';

  removeButton.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(removeButton);
  taskList.appendChild(li);

  taskInput.value = '';
});