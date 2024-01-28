import { store } from "../store.js";

function createTaskItem() {
  const taskEl = document.createElement("li");
  taskEl.classList.add("task", "sheet-line");

  return taskEl;
}

function createCheckbox(task) {
  const iconEl = document.createElement("span");
  iconEl.classList.add("task-icon");

  const checkboxEl = document.createElement("input");
  checkboxEl.type = "checkbox";
  checkboxEl.name = `${task.id}-checkbox`;
  checkboxEl.checked = task.isCompleted;

  checkboxEl.addEventListener("change", (event) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      store.markAsCompleted(task.id);
    } else {
      store.markAsUnCompleted(task.id);
    }
  });

  iconEl.appendChild(checkboxEl);

  return iconEl;
}

function createTitle(task) {
  const titleEl = document.createElement("span");
  titleEl.classList.add("p-1-2");
  titleEl.innerText = task.title;

  return titleEl;
}

function createActions(task) {
  const actionsEl = document.createElement("span");
  actionsEl.classList.add("task-actions");

  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", () => {
    store.deleteTask(task.id);
  });

  const deleteBtnImg = document.createElement("img");
  deleteBtnImg.src = "assets/delete.svg";
  deleteBtnImg.alt = "Delete task";

  deleteButton.appendChild(deleteBtnImg);
  actionsEl.appendChild(deleteButton);

  return actionsEl;
}

function createTask(taskData) {
  const task = createTaskItem();
  const taskCheckbox = createCheckbox(taskData);
  const taskTitle = createTitle(taskData);
  const taskActions = createActions(taskData);

  task.appendChild(taskCheckbox);
  task.appendChild(taskTitle);
  task.appendChild(taskActions);

  return task;
}

export function renderTasks(tasks) {
  console.debug("render tasks");

  const tasksList = document.getElementById("tasks-list");

  tasksList.innerHTML = "";

  tasks.forEach((taskData) => {
    const task = createTask(taskData);
    tasksList.appendChild(task);
  });
}
