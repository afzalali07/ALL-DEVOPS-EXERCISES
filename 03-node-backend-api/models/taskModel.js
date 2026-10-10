const tasks = [
  { id: 1, title: "Learn Node.js", done: false },
];

function getAll() {
  return tasks;
}

function add(title) {
  const task = { id: Date.now(), title, done: false };
  tasks.push(task);
  return task;
}

module.exports = { getAll, add };
