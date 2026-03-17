import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    if (text.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <h1>My Task Manager</h1>

      <TaskInput addTask={addTask} />

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      )}

      <p>Total Tasks: {tasks.length}</p>
    </div>
  );
}

export default App;