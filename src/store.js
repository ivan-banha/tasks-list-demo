import { generateID } from "./utils.js";

// Dummy data

const tasks = [
  {
    id: generateID(),
    title: "Text 1",
    isCompleted: false,
  },
  {
    id: generateID(),
    title: "Text 2",
    isCompleted: false,
  },
  {
    id: generateID(),
    title: "Text 3",
    isCompleted: false,
  },
];

function notifyStateChanged() {
  const customEvent = new CustomEvent("tasks-updated");

  document.body.dispatchEvent(customEvent);
}

// Store actions

function getTask(taskId) {
  return store.tasks.find((task) => task.id === taskId);
}

function addTask(task) {
  store.tasks.push(task);

  notifyStateChanged();
}

function editTask(task) {
  notifyStateChanged();
}

function deleteTask(taskId) {
  const taskIndex = store.tasks.findIndex((task) => task.id === taskId);

  if (taskIndex < 0) {
    console.error(`Task "${taskId}" not found`);
    return;
  }

  store.tasks.splice(taskIndex, 1);

  notifyStateChanged();
}

function markAsCompleted(taskId) {
  const task = getTask(taskId);
  task.isCompleted = true;

  notifyStateChanged();
}

function markAsUnCompleted(taskId) {
  const task = getTask(taskId);
  task.isCompleted = false;

  notifyStateChanged();
}

const store = {
  tasks,
  addTask,
  getTask,
  deleteTask,
  editTask,
  markAsCompleted,
  markAsUnCompleted,
};

export { store };
