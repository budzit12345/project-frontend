function filterTasks(tasks, doneStatus) {
    const filtered = {};
    for (const id in tasks) {
      if (tasks[id].done === doneStatus) {
        filtered[id] = tasks[id];
      }
    }
    return filtered;
  }
  
  module.exports = { filterTasks };
  