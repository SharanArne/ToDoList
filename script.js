// Selecting DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new list item
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <span>${taskText}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  // Append to the task list
  taskList.appendChild(listItem);

  // Clear the input
  taskInput.value = "";
}

// Function to delete a task
function deleteTask(button) {
  const listItem = button.parentElement;
  taskList.removeChild(listItem);
}

// Event listener for the add task button
addTaskButton.addEventListener("click", addTask);

// Allow adding tasks by pressing "Enter"
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
