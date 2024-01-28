import { renderTasks } from "./components/task.js";
import { store } from "./store.js";
import { generateID } from "./utils.js";

const addTaskInput = document.getElementById("add-task");

addTaskInput.addEventListener("keypress", (event) => {
  const keyCode = event.keyCode;
  const value = event.target.value;

  const canAddNewTask = !!value && keyCode === 13; // 13 - represents the "Enter" button

  if (!canAddNewTask) return;

  const task = {
    id: generateID(),
    title: value,
    isCompleted: false,
  };

  store.addTask(task);
  event.target.value = "";
});

renderTasks(store.tasks);
document.body.addEventListener("tasks-updated", () => {
  renderTasks(store.tasks);
});
